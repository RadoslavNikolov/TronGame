<template>
    <div>
        <div class="d-flex justify-content-between mt-3 mb-3" v-cloak>
            <h4>Game board</h4>
            <div>
                <b-button-group>
                    <b-button v-if="gameStarted && !gamePaused" variant="warning" @click.stop="pauseGame" :disabled="!isAuthenticated"><i class="fas fa-pause"></i> Pause</b-button>
                    <b-button v-if="gameStarted && gamePaused" variant="success" @click.stop="resumeGame" :disabled="!isAuthenticated"><i class="fas fa-play"></i> Resume</b-button>
                    <b-button variant="secondary" v-b-modal.liveChatModal :disabled="!isAuthenticated"><i class="fas fa-comments"></i> Live chat</b-button>
                    <b-button variant="danger" @click.stop="leaveTheGame" :disabled="!isAuthenticated"><i class="fas fa-sign-out-alt"></i> Leave</b-button>
                </b-button-group>
            </div>
        </div>
        <hr>

        <div class="d-flex justify-content-between" v-cloak>
            <player-profile v-if="myself" :class="myself ? 'me' : ''"  :model="myself"></player-profile>
            <div><img src="~@/assets/navigation.png" style="max-width: 80px; height: auto"></div>
            <player-profile v-if="opponent" :model="opponent"></player-profile>
        </div>

        <div id="canvas-container">
            <canvas v-show="gameStarted" ref="my-canvas" id="myCanvas" :width="game.width" :height="game.height"></canvas>
        </div>

        <game-stats-modal v-model="statisticsModalShow" :stats="stats" @closed="onStatsModalClose" />
    </div>
</template>

<script>

import { mapGetters, mapState, mapActions } from 'vuex'
import gameService from '../services/game.service'
import GameStatsModal from '../components/game-statistics-model'
import PlayerProfile from '../components/player-profile'

export default {
    name: 'GameBoard',
    components: {
        GameStatsModal,
        PlayerProfile
    },
    props: {
        gameUid: String,
        playerNumStr: [Number, String]
    },
    data() {
        return {
            player1: {},
            player2: {},
            keysToDirections: {
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down'
            },
            playerNum: Number(this.playerNumStr),
            game: {},
            provider: {
                context: null
            },
            defaultTimerInterval: 600,
            interval: null,
            counter: 0,
            gameStarted: false,
            gamePaused: false,
            outOfBoundaries: false,
            collisionDetected: false,
            headToHeadCollisionDetected: false,
            stats: {},
            statisticsModalShow: false,
            workerActions: [ 
                { message: 'outOfBoundariesCheck', func: (points, width, height) => {
                    if(!points || points.length <= 0){
                        return false;
                    }
                    
                    const head = points[0];
                    if(head.topLeft.x <= 0 || head.topLeft.y <= 0
                        || head.bottomRight.x <= 0 || head.bottomRight.y <= 0){
                        
                        return true;
                    }

                    if(head.topLeft.x >= width || head.bottomRight.x >= width
                        || head.topLeft.y >= height || head.bottomRight.y >= height){
                            
                        return true;
                    }

                    return false;
                }},
                { message: 'collideOpponentCheck', func: (myHead, opponentPoints) => {
                    if(!myHead || !opponentPoints || opponentPoints.length <= 0){
                        return false;
                    }
                    
                    return  opponentPoints.some(p => myHead.topLeft.x < p.bottomRight.x
                        && myHead.bottomRight.x > p.topLeft.x
                        && myHead.topLeft.y < p.bottomRight.y
                        && myHead.bottomRight.y > p.topLeft.y);
                }},
                { message: 'headToHeadCollisionCheck', func: (myHead, opponentHead) => {
                    if(!myHead || !opponentHead){
                        return false;
                    }
                    
                    return myHead.topLeft.x < opponentHead.bottomRight.x
                        && myHead.bottomRight.x > opponentHead.topLeft.x
                        && myHead.topLeft.y < opponentHead.bottomRight.y
                        && myHead.bottomRight.y > opponentHead.topLeft.y;
                }},
                { message: 'collideMyselfCheck', func: (myPoints) => {
                    if(!myPoints || myPoints.length <= 0){
                        return false;
                    }
                    
                    const myHead = myPoints[0];

                    return myPoints.slice(1).some(p => myHead.topLeft.x < p.bottomRight.x
                        && myHead.bottomRight.x > p.topLeft.x
                        && myHead.topLeft.y < p.bottomRight.y
                        && myHead.bottomRight.y > p.topLeft.y);
                }} 
            ],
            worker: null
        }
    },
    computed: {
        ...mapState('context', [
        'profile'
        ]),
        ...mapGetters('context', [
        'isAuthenticated', 'userName', 'userEmail'
        ]),
        timerInerval(){
            if(!this.game.level){
                return this.defaultTimerInterval;
            }

            return this.defaultTimerInterval / this.game.level;
        },
        elementSize(){
            return this.game && this.game.elementSize
                ? this.game.elementSize
                : 8;
        },
        myself(){
            return this.playerNum === 1 ? this.player1 : this.player2;
        },
        opponent(){
            return this.playerNum === 1 ? this.player2 : this.player1;
        }
    },
    created() {
        this.joinGame({ gameUid: this.gameUid });

        this.$mainHub.$on('game-player-joined', this.onPlayerJoined);
        this.$mainHub.$on('game-player-left', this.onPlayerLeft);

        this.$mainHub.$on('game-start', this.onGameStart);
        this.$mainHub.$on('game-ticked', this.onGameTicked);
        this.$mainHub.$on('game-over', this.onGameOver);
        this.$mainHub.$on('game-paused', this.onGamePaused);
        this.$mainHub.$on('game-resumed', this.onGameResumed);

        this.$mainHub.joinGame(this.gameUid, this.profile.email, this.playerNum);

        window.addEventListener('keydown', this.onKeyPress);

        this.worker = this.$worker.create(this.workerActions);
    },
    mounted () {
        this.provider.context = this.$refs['my-canvas'].getContext('2d');
    },
    beforeDestroy() {
        this.leaveGame({ gameUid: null });

        // Make sure to cleanup SignalR event handlers when removing the component
        this.$mainHub.$off('game-player-joined', this.onPlayerJoined);
        this.$mainHub.$off('game-player-left', this.onPlayerLeft);

        this.$mainHub.$off('game-start', this.onGameStart);
        this.$mainHub.$off('game-ticked', this.onGameTicked);
        this.$mainHub.$off('game-over', this.onGameOver);
        this.$mainHub.$off('game-paused', this.onGamePaused);
        this.$mainHub.$off('game-resumed', this.onGameResumed);

        window.removeEventListener('keydown', this.onKeyPress);

        this.worker = null;
    },
    methods: {
         ...mapActions('context', [
            'joinGame', 'leaveGame'
        ]),
        leaveTheGame(skipMessage){
            if(skipMessage){
                this.$mainHub.leaveGame(this.gameUid, this.profile.email, Number(this.playerNum))
                .then(() => {
                    this.$router.push('/');    
                })
                .catch(() => {
                    
                })
            }else{
                this.$bvModal.msgBoxConfirm('Are you sure you want to leave the game?', {
                    title: 'Game exit',
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'danger',
                    okTitle: 'YES',
                    cancelTitle: 'NO',
                    footerClass: 'p-2',
                    hideHeaderClose: false,
                    centered: true
                })
                .then((res) => {
                    if(res){
                        this.$mainHub.leaveGame(this.gameUid, this.profile.email, Number(this.playerNum))
                        .then(() => {
                            this.$router.push('/')    ;     
                        })
                        .catch(() => {
                            
                        })
                        
                    }
                })
                .catch(() => {
                    
                })
            }
        },
        pauseGame(){
            this.$mainHub.pauseGame(this.gameUid, this.profile.email)
        },
        resumeGame(){
            this.$mainHub.resumeGame(this.gameUid, this.profile.email)
        },
        onPlayerJoined (gameUid, player1, player2) {
            this.setPlayers(player1, player2);
        },
        onPlayerLeft (gameUid, laeving, player1, player2) {
            this.setPlayers(player1, player2);

            this.$bvModal.msgBoxOk(`${laeving} left the game!`)
            .then(() => {
                this.leaveTheGame(true);
            })
            .catch(() => {
                
            })
        },
        setPlayers(player1, player2){
            this.player1 = {...player1, userName: player1?.name, userEmail: player1?.name, color: 'red'};
            this.player2 = {...player2, userName: player2?.name, userEmail: player2?.name, color: 'blue'};
        },
        playerMove(gameUid, playerNum, direction){
            this.$mainHub.playerMove(gameUid, playerNum, direction);
        },
        onGameStart(game){
            this.game = game;
            this.gameStarted = true;

            if(this.playerNum === 1){
                this.setInterval();
            }
        },
        onGameTicked(gameUid, tickCounter, p1, p2, p1Points, p2Points){
            this.counter = tickCounter;

            gameService.gameTick(this.player1, this.player2, p1, p2, p1Points, p2Points);

            this.startDraw();

            this.worker.postMessage('outOfBoundariesCheck', [this.myself.points, this.game.width, this.game.height])
            .then((isOut) => {
                if(isOut){
                    this.outOfBoundaries = true;
                    this.$mainHub.outOfTheBoundaries(this.gameUid, this.profile.email, Number(this.playerNum));
                }
            }).catch()

            //Without the opponent head
            this.worker.postMessage('collideOpponentCheck', [this.myself.points[0], this.opponent.points.slice(1)])
            .then((result) => {
                if(result){
                    this.collisionDetected = true;
                    this.$mainHub.outOfTheBoundaries(this.gameUid, this.profile.email, Number(this.playerNum));
                }
            }).catch()

            this.worker.postMessage('collideMyselfCheck', [this.myself.points])
            .then((result) => {
                if(result){
                    this.collisionDetected = true;
                    this.$mainHub.outOfTheBoundaries(this.gameUid, this.profile.email, Number(this.playerNum));
                }
            }).catch()

            this.worker.postMessage('headToHeadCollisionCheck', [this.myself.points[0], this.opponent.points[0]])
            .then((result) => {
                if(result){
                    this.headToHeadCollisionDetected = true;
                    this.$mainHub.headToHeadCollision(this.gameUid);
                }
            }).catch()

        },
        onGameOver(gameUid, winner, score, message){
            this.gameStarted = false;
            this.stats.winner = winner;
            this.stats.score = score;
            this.stats.message = message;

            this.showGameStatistics();
        },
        onGamePaused(gameUid, message){
            this.gamePaused = true;

            this.$bvToast.toast(message, {
                toaster: 'b-toaster-bottom-full',
                title: `Game paused`,
                variant: 'warning',
                solid: true,
                appendToast: true
            })
        },
        onGameResumed(gameUid, message){
            this.gamePaused = false;

            this.$bvToast.toast(message, {
                toaster: 'b-toaster-bottom-right',
                title: `Game resumed`,
                variant: 'info',
                solid: true,
                appendToast: true
            })
        },
        showGameStatistics(){
            this.statisticsModalShow = true;  

        },
        startDraw(){
            let draw = () => {
                gameService.draw(this.provider, this.game, this.player1, this.player2, this.elementSize);

                requestAnimationFrame(draw);
            }

            draw();
        },
        onKeyPress(event){
            let direction = this.keysToDirections[event.keyCode];
            if(this.gameStarted && direction){
                console.log(direction);
                this.playerMove(this.gameUid, this.playerNum, direction);
            }
        },
        setInterval(){
            this.interval = setInterval(() => {
                if(this.gameStarted && !this.gamePaused){
                    this.gameTick();
                }
            }, this.timerInerval)
        },
        gameTick(){
            this.$mainHub.gameTick(this.gameUid);
        },
        onStatsModalClose(){
            Object.assign(this.stats, {
                winner: '',
                score: ''
            })
            this.statisticsModalShow = false;
            this.$router.push('/') ;
        }
    },
    watch: {
        outOfBoundaries : function(val) {
            if(val){
                this.$bvToast.toast('You went out of boudaries!', {
                    toaster: 'b-toaster-bottom-right',
                    title: `Out of boudaries`,
                    variant: 'warning',
                    solid: true,
                    appendToast: true
                })
            }
        },
        collisionDetected: function(val) {
            if(val){
                 this.$bvToast.toast('You collided your opponent!', {
                    toaster: 'b-toaster-bottom-right',
                    title: `Collision detected`,
                    variant: 'warning',
                    solid: true,
                    appendToast: true
                })
            }
        },
        headToHeadCollisionDetected: function(val) {
            if(val){
                 this.$bvToast.toast('The game ended evenly!', {
                    toaster: 'b-toaster-bottom-right',
                    title: `Head to Head collision detected`,
                    variant: 'warning',
                    solid: true,
                    appendToast: true
                })
            }
        }
    }
}
</script>

<style scoped>
    .me { 
      text-decoration: underline; 
      font-weight: bold
    }

    #myCanvas {
      border: 4px solid blue
    }

    #canvas-container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
