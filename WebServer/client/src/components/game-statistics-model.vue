<template>
    <b-modal v-model="showModal" id="gameStatisticsModal" ref="gameStatisticsModal" 
        hide-footer title="Game statistics" @hidden="onHidden">  
        <b-form-group>
            <div class="text-center" v-if="isWinner">
                <img src="../assets/cup1.png">
            </div>
            <div v-if="statistics.winner" class="text-center">
                <div v-if="isWinner">
                    <h4>You are the winner!</h4>
                </div>
                <div v-else>
                    <h4>You lose!</h4>
                    <h4>The winner is <strong>{{statistics.winner}} </strong></h4>
                </div>
                <h5>Score: {{statistics.score}}</h5>
            </div>
            <div v-else>
                <h4>{{statistics.message}}</h4>
            </div>
        </b-form-group>
         <button @click.stop="onOk" class="btn btn-secondary float-right" type="button">Ok</button>
    </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        stats: Object,
        value: Boolean
    },
    data() {
        return {
            statistics: this.stats,
            showModal: this.value
        }
    },
    methods: {
        onOk () {
            this.$refs.gameStatisticsModal.hide();
        },
        onHidden () {
            Object.assign(this.statistics, {
                winner: '',
                score: ''
            })
            this.$emit("closed")
        }
    },
    computed: {
        ...mapGetters('context', [
            'userName', 'userEmail'
        ]),
        isWinner(){
            return this.statistics.winner && (this.statistics.winner === this.userName || this.statistics.winner === this.userEmail);
        }
    },
    watch:{
        value : function  (val) {
            this.showModal = val;
        }
    }
}
</script>