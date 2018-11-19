import　Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = new Vuex.Store({
    state: () => ({
      counter: 0,
      isLogin: false,
      userData: null
    }),
    mutations: {
      isLogin (state, value) {
        state.isLogin = value
      },
      userData (state, value) {
        state.userData = value
      },
      increment (state) {
        state.counter++
      }
    }
  })

export default createStore
