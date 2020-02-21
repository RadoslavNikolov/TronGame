<template>
    <div class="mt-4">
        <h3>Ranking</h3>
        <b-table responsive striped hover :items="ranking" :fields="fields">
                <template v-slot:cell(rank)="row">
                    <img v-if="row.item.rank === 1" src="../assets/cup_gold.png">
                    <img v-else-if="row.item.rank === 2" src="../assets/cup_silver.png">
                    <img v-else-if="row.item.rank === 3" src="../assets/cup_bronze.png">
                    <span class="ml-2 h5">{{row.item.rank}}</span>
                </template>

                <template v-slot:cell(name)="row">
                    <span class="ml-2" :class="userEmail && row.item.name && userEmail.toLowerCase() === row.item.name.toLowerCase() ? 'h6' :''">{{row.item.name}}</span>
                </template>
        </b-table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
     name: 'Ranking',
     data() {
        return {
            fields: [
                {
                    key: 'rank',
                    sortable: true,
                    label: '',
                },
                {
                    key: 'name',
                    sortable: true,
                    label: 'Name',
                },
                {
                    key: 'score',
                    label: 'Score',
                    sortable: true,
                }
            ],
            ranking: []
        }
    },
    computed: {
      ...mapGetters('context', [
      'isAuthenticated', 'userName', 'userEmail'
      ])
  },
    created() {
      this.$http.get('/api/statistics').then(res => {
          this.ranking = res.data;
      })
  },
}
</script>

<style scoped>
  .fade.show {opacity: 1}
</style>