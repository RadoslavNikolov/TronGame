<template>
  <b-modal id="liveChatModal" ref="liveChatModal" hide-footer title="Live Chat" size="lg" 
    @hidden="onHidden"
    @hide="onHide"
    @show="onShow">
    {{currentGameUid}}
    <div class="bg-light messages-container">
      <ul v-if="filteredMessages.length" class="list-unstyled container">
        <li v-for="(message, index) in filteredMessages" :key="index" class="row my-2">
          <span class="col-4">{{ message.username === profile.name ? 'You' : message.username }}</span>
          <vue-markdown :class="{'col-8': true, 'text-muted': message.username === profile.name}" :source="message.text" />
        </li>
      </ul>
      <p v-else class="text-muted text-center">
        Welcome to the chat...<br />
        Say hi!
      </p>
    </div>

    <b-form class="border-top mt-2 pt-2" @submit.prevent="onSendMessage">
      <b-form-group label="Your message:"  description="Press Ctrl + Enter to send" label-for="messageInput">
        <b-form-textarea id="messageInput"
                      v-model="form.message"
                      placeholder="What do you have to say?"
                      :rows="2"
                      :max-rows="10">
        </b-form-textarea>
      </b-form-group>
      <button class="btn btn-primary float-right ml-2" type="submit">Send</button>
    </b-form>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown
  },
  data () {
    return {
      messages: [],
      form: {
        message: ''
      }
    }
  },
  computed: {
    ...mapState('context', [
      'profile', 'currentGameUid'
    ]),
    filteredMessages(){
      if(!this.currentGameUid){
        return this.messages.filter(x => !x.gameUid);
      }else{
        return this.messages.filter(x => x.gameUid === this.currentGameUid);
      }
    }
  },
  created () {
    this.$mainHub.$on('chat-message-received', this.onMessageReceived);
  },
  beforeDestroy () {
    // Make sure to cleanup SignalR event handlers when removing the component
    this.$mainHub.$off('chat-message-received', this.onMessageReceived);
  },
  methods: {
    onMessageReceived ({ username, text }) {
      this.messages = [{ username, text, gameUid: this.currentGameUid }, ...this.messages];
    },
    onSendMessage () {
      this.$mainHub.sendMessage(this.form.message, this.currentGameUid);
      this.form.message = '';
    },
    onShow() {
      window.addEventListener('keydown', this.onKeyPress);
    },
    onHide(){
      window.addEventListener('keydown', this.onKeyPress);
    },
    onHidden () {
      Object.assign(this.form, {
        message: ''
      })
    },
    onKeyPress(e){
      if (e.ctrlKey && e.keyCode == 13 && this.form.message) {
        // Ctrl-Enter pressed
        this.onSendMessage();
      }
    }
  }
}
</script>

 <style scoped>
 .messages-container{
   max-height: 600px;
   overflow-y: auto;
 }
 </style>