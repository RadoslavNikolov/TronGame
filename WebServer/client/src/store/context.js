import Vue from 'vue'
import axios from 'axios'

const isInProduction = location.href.indexOf('localhost') <= 0;
let url = '';
if (isInProduction) {
    let href = location.href.split('#')[0];
    if (href[href.length - 1] === '/') {
        href = href.slice(0, href.length - 1);
    }
    url = href;
} else {
    url = 'https://localhost:44305'; //! Not used for now
}

const store = {
  namespaced: true,

  state: {
    profile: {},
    jwtToken: null,
    baseUrl: url,
    gameLevels:  {
      1: 'Easy',
      2: 'Medium',
      3: 'Hard'
    },
    gameLevelOptions:  [
      { value: 1, text: 'Easy' },
      { value: 2, text: 'Medium' },
      { value: 3, text: 'Hard' }
    ],
    arenaSizeOptions: [
      { value: 600, text: 'Small' },
      { value: 800, text: 'Medium' },
      { value: 1000, text: 'Large' }
    ],
    playerSizeOptions: [
      { value: 6, text: 'Small' },
      { value: 10, text: 'Medium' },
      { value: 14, text: 'Large' }
    ],
    currentGameUid: null
  },

  getters: {
    isAuthenticated: state => state.profile.name && state.profile.email,
    baseUrl: state => state.baseUrl,
    userName: state => state.profile.name,
    userEmail: state => state.profile.email,
    gameLevels: state => state.gameLevels,
    currentGameUid: state => state.currentGameUid,
    arenaSizeOptions: state => state.arenaSizeOptions,
    playerSizeOptions: state =>  state.playerSizeOptions,
    gameLevelOptions: status =>  status.gameLevelOptions,
  },

  mutations: {
    setProfile (state, profile) {
      state.profile = profile;
    },
    setJwtToken (state, jwtToken) {
      state.jwtToken = jwtToken;

      //! Storing JWT tokens in local storage or anywhere accessible by JavaScript is a security issue!
      // Store token securily on a real application
      // For example, a web app can store them in cookies not accessible to JavaScript, while a native app will need to use the device secure storage
      if (jwtToken) {
        window.localStorage.setItem('jwtToken', jwtToken);
      }else{
        window.localStorage.removeItem('jwtToken');
      }
    },
    setGameUid(state, gameUid) {
      state.currentGameUid = gameUid;
    }
  },

  actions: {
    // Used during startup to reload the profile from the server
    restoreContext ({ commit, getters, state }) {
      const jwtToken = window.localStorage.getItem('jwtToken')
      if (jwtToken) {
        commit('setJwtToken', jwtToken)
      }

      return axios.get('account/context').then(res => {
        commit('setProfile', res.data)
        if (getters.isAuthenticated) {
            return Vue.prototype.startSignalR(state.jwtToken)
        }
      })
    },
    // Login methods. Either use cookie-based auth or jwt-based auth
    login ({ state, dispatch }, { authMethod, credentials }) {
      const loginAction = authMethod === 'jwt'
        ? dispatch('loginToken', credentials)
        : dispatch('loginCookies', credentials)

      return loginAction.then(() => Vue.prototype.startSignalR(state.jwtToken))
    },
    loginCookies ({ commit }, credentials) {
      return axios.post('account/login', credentials).then(res => {
        commit('setProfile', res.data)
      })
    },
    loginToken ({ commit }, credentials) {
      return axios.post('account/token', credentials).then(res => {
        const profile = res.data
        const jwtToken = res.data.token
        delete profile.token
        commit('setProfile', profile)
        commit('setJwtToken', jwtToken)
      })
    },
    // Logout. (With JWT the request isnt strictly necessary unless the server needs some cleanup/auditing)
    logout ({ commit, state }) {
      const logoutAction = state.jwtToken
        ? Promise.resolve()
        : axios.post('account/logout')

      return logoutAction.then(() => {
        commit('setProfile', {})
        commit('setJwtToken', null)
        return Vue.prototype.stopSignalR()
      })
    },
    joinGame ({ commit }, { gameUid }) {
      commit('setGameUid', gameUid)
    },
    leaveGame ({ commit }, { gameUid }) {
      commit('setGameUid', gameUid)
    },
  }
}

export default store