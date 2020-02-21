import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr'

export default {
    install (Vue) {
      // use a new Vue instance as the interface for Vue components to receive/send SignalR events
      // this way every component can listen to events or send new events using this.$questionHub
      const mainHub = new Vue();
      Vue.prototype.$mainHub = mainHub
  
      // Provide methods to connect/disconnect from the SignalR hub
      let connection = null;
      let startedPromise = null;
      let manuallyClosed = false;
  
      Vue.prototype.startSignalR = (jwtToken) => {
        connection = new HubConnectionBuilder()
            .withUrl(
            `${Vue.prototype.$http.defaults.baseURL}/main-hub`,
            jwtToken ? { accessTokenFactory: () => jwtToken } : null
          )
          .configureLogging(LogLevel.Information)
          .build()
  
        // Forward hub events through the event, so we can listen for them in the Vue components
        connection.on('LiveChatMessageReceived', (username, text) => {
          mainHub.$emit('chat-message-received', { username, text })
        })

        connection.on('GameAdded', (game) => {
          mainHub.$emit('game-added', game)
        })
  
        connection.on('GameJoined', (game) => {
          mainHub.$emit('game-joined', game)
        })

        connection.on('GameRemoved', (gameUid) => {
          mainHub.$emit('game-removed', gameUid)
        })

        connection.on('GameStart', (game) => {
          mainHub.$emit('game-start', game)
        })

        connection.on('GamePlayerJoin', (game, player1, player2) => {
          mainHub.$emit('game-player-joined', game, player1, player2)
        })

        connection.on('GamePlayerLeave', (game, laeving, player1, player2) => {
          mainHub.$emit('game-player-left', game, laeving, player1, player2)
        })

        connection.on('GameTicked', (gameUid, tickCounter, p1, p2, p1Points, p2Points) => {
          mainHub.$emit('game-ticked', gameUid, tickCounter, p1, p2, p1Points, p2Points)
        })

        connection.on('GameOver', (gameUid, winner, score, message) => {
          mainHub.$emit('game-over', gameUid, winner, score, message)
        })

        connection.on('GamePaused', (gameUid, message) => {
          mainHub.$emit('game-paused', gameUid, message)
        })

        connection.on('GameResumed', (gameUid, message) => {
          mainHub.$emit('game-resumed', gameUid, message)
        })

  
        // You need to call connection.start() to establish the connection but the client wont handle reconnecting for you!
        // Docs recommend listening onclose and handling it there.
        // This is the simplest of the strategies
        function start () {
          startedPromise = connection.start()
            .catch(err => {
              console.error('Failed to connect with hub', err)
              return new Promise((resolve, reject) => setTimeout(() => start().then(resolve).catch(reject), 5000))
            })
          return startedPromise
        }
        connection.onclose(() => {
            if (!manuallyClosed) {
                start()
            }
        })
  
        // Start everything
        manuallyClosed = false;
        start();
      }

      Vue.prototype.stopSignalR = () => {
        if (!startedPromise) {
            return;
        }
  
        manuallyClosed = true
        return startedPromise
          .then(() => connection.stop())
          .then(() => { startedPromise = null })
      }
  
      // Provide methods for components to send messages back to server
      // Make sure no invocation happens until the connection is established

      mainHub.sendMessage = (message, gameUid) => {
        if (!startedPromise) return
  
        return startedPromise
          .then(() => connection.invoke('SendLiveChatMessage', message, gameUid))
          .catch(console.error)
      }

      mainHub.joinGame = (gameUid, player, playerNum) => {
        if (!startedPromise) return
        
        return startedPromise
          .then(() => connection.invoke('GameJoin', gameUid, player, playerNum))
          .catch(console.error)
      }

      mainHub.leaveGame = (gameUid, player, playerNum) => {
        if (!startedPromise) return
  
        return startedPromise
          .then(() => connection.invoke('GameLeave', gameUid, player, playerNum))
          .catch(console.error)
      }

      mainHub.playerMove = (gameUid, playerNum, direction) => {
        if (!startedPromise) return
  
        return startedPromise
          .then(() => connection.invoke('PlayerMove', gameUid, playerNum, direction))
          .catch(console.error)
      }

      mainHub.gameTick = (gameUid) => {
        if (!startedPromise) return
  
        return startedPromise
          .then(() => connection.invoke('GameTick', gameUid))
          .catch(console.error)
      }

      mainHub.outOfTheBoundaries = (gameUid, player, playerNum) => {
        if (!startedPromise) return
  
        return startedPromise
          .then(() => connection.invoke('OutOfTheBoundaries', gameUid, player, playerNum))
          .catch(console.error)
      },

      mainHub.headToHeadCollision = (gameUid) => {
        if (!startedPromise) return
  
        return startedPromise
          .then(() => connection.invoke('HeadToHeadCollision', gameUid))
          .catch(console.error)
      },

      mainHub.pauseGame = (gameUid, player) => {
        if (!startedPromise) return
  
        return startedPromise
          .then(() => connection.invoke('PauseGame', gameUid, player))
          .catch(console.error)
      }

      mainHub.resumeGame = (gameUid, player) => {
        if (!startedPromise) return
  
        return startedPromise
          .then(() => connection.invoke('ResumeGame', gameUid, player))
          .catch(console.error)
      }
    }
  }