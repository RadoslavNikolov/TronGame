<template>
  <div class="home">

    <!-- <img alt="Logo" src="../assets/logo1.png"> -->

    <div class="mt-3">
      <b-button-group>
        <b-button v-b-modal.addGameModal :disabled="!isAuthenticated" variant="success"><i class="fas fa-plus"/> New game</b-button>
        <b-button variant="secondary" v-b-modal.liveChatModal :disabled="!isAuthenticated"><i class="fas fa-comments"></i> Live chat</b-button>
      </b-button-group>
    </div>

    <!-- {{games}} -->

    <div class="mt-4">
      <b-table responsive striped  hover  :items="games" :fields="fields">
        <template v-slot:cell(actions)="row">
          <b-button variant="outline-secondary" size="sm" @click.stop="joinGame(row.item)" 
            v-if='row.item.player1Name !== userEmail && row.item.player2Name !== userEmail && (!row.item.player1Name || !row.item.player2Name)' class="mr-1">
            Join
          </b-button>
          <b-button variant="outline-success" size="sm" @click.stop="startGame(row.item)" 
            v-if='row.item.player1Name && row.item.player2Name && (row.item.player1Name === userEmail || row.item.player2Name === userEmail)' class="mr-1">
            Start
          </b-button>
        </template>

        <template v-slot:cell(gameLevel)="row">
          <b-badge :variant="row.item.gameLevel == 3 ? 'danger' : 'secondary'">{{gameLevels[row.item.gameLevel]}}</b-badge>
        </template>
      </b-table>
    </div>

    <div class="pt-4 pd-sm-0 v-if=">
      <ranking-table />
    </div>

    <add-game-modal @game-added="onGameAdded"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapState } from 'vuex'
import AddGameModal from '../components/add-game-modal'
import RankingTable from '../components/ranking-table'

export default {
  name: 'Home',
  components: {
    AddGameModal,
    RankingTable
  },
  data() {
      return {
        fields: [
          {
            key: 'actions',
            label: ' '
          },
          {
            key: 'name',
            sortable: true,
            label: 'Game name',
          },
          {
            key: 'player1Name',
            label: 'Player 1',
            sortable: true,
          },
          {
            key: 'player2Name',
            label: 'Player 2',
            sortable: true,
          },
          {
            key: 'note',
            label: 'Note',
            sortable: true,
          },
          {
            key: 'gameLevel',
            label: 'Level',
            sortable: true,
          },
          {
            key: 'size',
            label: 'Size',
            sortable: true,
          }
        ],
        games: [],
        stats: {},
        statisticsModalShow: false
      }
  },
  computed: {
      ...mapState('context', [
      'profile'
      ]),
      ...mapGetters('context', [
      'isAuthenticated', 'userName', 'userEmail', 'gameLevels'
      ])
  },
  created() {
      this.$mainHub.$on('game-added', this.onGameAdded);
      this.$mainHub.$on('game-joined', this.onGameJoined);
      this.$mainHub.$on('game-removed', this.onGameRemoved);

      if(this.isAuthenticated){
        this.$http.get('/api/game').then(res => {
            this.games = res.data;
        })

      }
  },
  beforeDestroy(){
      // Make sure to cleanup SignalR event handlers when removing the component
      this.$mainHub.$off('game-added', this.onGameAdded);
      this.$mainHub.$off('game-joined', this.onGameJoined);
      this.$mainHub.$off('game-removed', this.onGameRemoved);
  },
  methods: {

    onGameAdded (game) {
        if (this.games.some(g => g.gameUid === game.gameUid)){
            return  ;
        } 
        
        this.games = [game, ...this.games];
    },
    onGameJoined (game) {
        if(game){
          let index = this.games.findIndex(g => g.gameUid === game.gameUid);
          this.$set(this.games, index, game);
        }
    },
    onGameRemoved(gameUid){
      if(gameUid){
          let index = this.games.findIndex(g => g.gameUid === gameUid);
          this.$delete(this.games, index);
      }
    },
    joinGame(item){
      if(item.player1Name === this.userEmail || item.player2Name === this.userEmail){
        this.$bvToast.toast('Already part of the game!', {
          toaster: 'b-toaster-bottom-right',
          title: `Attempt to join the game`,
          variant: 'warning',
          solid: true,
          appendToast: true
        })
      }

      this.$http.post(`api/game/${item.gameUid}/join`, item).then(() => {
        this.$bvToast.toast(`Successfully join the game!`, {
            toaster: 'b-toaster-bottom-right',
            title: `Attempt to joined the game`,
            variant: 'success',
            solid: true,
            appendToast: true
        })
      })
    },
    startGame(item){
      let playerNum = item.player1Name && item.player1Name.toLowerCase() === this.userEmail
        ? 1
        : (item.player2Name && item.player2Name.toLowerCase() === this.userEmail
          ? 2 : 0);
      if(playerNum === 0){
        return;
      }

      this.$router.push(`/game/${item.gameUid}/${playerNum}`);
    },
    onStatsModalClose(){
      this.statisticsModalShow = false;
    }
  }
}
</script>

<style scoped>
  .fade.show {opacity: 1}
</style>