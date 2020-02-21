<template>
  <b-modal id="addGameModal" ref="addGameModal" hide-footer title="Add new Game" @hidden="onHidden">
    <b-form @submit.prevent="onSubmit" @reset.prevent="onCancel">
      <b-form-group label="Name:" label-for="nameInput">
        <b-form-input id="nameInput"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Please provide a name">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Level:" label-for="levelInput">
        <b-form-select id="levelInput" 
                      required
                      placeholder="Please provide a game level"
                      v-model="form.gameLevel" 
                      :options="gameLevelOptions">
        </b-form-select>
      </b-form-group>

      <b-form-group label="Arena size:" label-for="arenaSizeInput">
        <b-form-select id="arenaSizeInput" 
                      required
                      placeholder="Please provide a game arena size"
                      v-model="form.arenaSize" 
                      :options="arenaSizeOptions">
        </b-form-select>
      </b-form-group>

      <b-form-group label="Player size:" label-for="playerSizeInput">
        <b-form-select id="playerSizeInput" 
                      required
                      placeholder="Please provide a player(element) size"
                      v-model="form.playerSize" 
                      :options="playerSizeOptions">
        </b-form-select>
      </b-form-group>

      <b-form-group label="Note:" label-for="noteInput">
        <b-form-textarea id="noteInput"
                      v-model="form.note"
                      v-b-tooltip.focus.d800
                      placeholder="Enter some note"
                      title="use markdown to format your note "
                      :rows="6"
                      :max-rows="10">
        </b-form-textarea>
      </b-form-group>

      <button :disabled="working" class="btn btn-primary float-right ml-2" type="submit" >Submit</button>
      <button class="btn btn-secondary float-right" type="reset">Cancel</button>
    </b-form>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      form: {
        name: '',
        note: '',
        gameLevel: 1,
        arenaSize: 800,
        playerSize: 10
      },
      working: false
    }
  },
  computed: {
     ...mapGetters('context', [
        'gameLevels', 'arenaSizeOptions', 'playerSizeOptions', 'gameLevelOptions'
      ])
  },
  methods: {
    onSubmit () {
      this.working = true;

      this.$http.post('api/game', this.form)
      .then(res => {
        this.working = false;
        this.$emit('game-added', res.data);
        this.$refs.addGameModal.hide();
      })
      .catch(() => {
        this.working = false;
      })
    },
    onCancel () {
      this.$refs.addGameModal.hide();
    },
    onHidden () {
      Object.assign(this.form, {
        name: '',
        note: ''
      })
    }
  }
}
</script>