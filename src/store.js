import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from "./router"

let spellApi = axios.create({
  baseURL: "https://mage-warz.herokuapp.com/api",
  withCredentials: true
})

let auth = axios.create({
  baseURL: "https://mage-warz.herokuapp.com/auth",
  withCredentials: true
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    spellbooks: {},
    spells: [],
    activeSpellBook: {}
  },
  mutations: {
    SETSPELLBOOKS(state, spellbooks) {
      state.spellbooks = spellbooks
    },
    SETUSER(state, user) {
      state.user = user
    },
    SETACTIVEBOOK(state, spellbook) {
      state.activeSpellBook = spellbook
    }
  },
  actions: {
    getAllSpellBooks({ commit }) {
      spellApi.get('spellbooks')
        .then(res => {
          console.log('spellbooks', res.data)
          commit('SETSPELLBOOKS', res.data)
        })
    },
    getSpellBook({ commit }, bookid) {
      spellApi.get('spellbooks/' + bookid)
        .then(res => {
          console.log('spellbooks', res.data)
          commit('SETACTIVEBOOK', res.data)
        })
    },
    register({ commit }, creds) {
      auth.post('register', creds)
        .then(res => {
          commit('SETUSER', res.data)
          router.push({ name: 'spellbooks' })
        })
        .catch(err => alert(err))
    },
    login({ commit }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('SETUSER', res.data)
          router.push({ name: 'spellbooks' })
        })
        .catch(err => alert(err))
    },
    authenticate({ commit }) {
      auth.get('authenticate')
        .then(res => {
          commit('SETUSER', res.data)
        })
        .catch(err => {
          router.push({ name: 'auth' })
        })
    },
    createSpellBook({ commit, dispatch }, payload) { //spellbooks is appended to baseUrl
      spellApi.post('spellbooks', payload)
        .then(res => {
          dispatch('getAllSpellBooks')
        })
    }
  }

}
)
