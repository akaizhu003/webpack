import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    test: ''
  },
  getters: {
    host() {
      return window.host
    }
  },
  mutations: {
    test(state, data) {
		state.test = data
    }
  },
  actions: {
	test ({commit, state}) {
      axios.get('teacher/klassTitle').then(res => {
        if (res.data.status === 1) {
          commit('test', res.data.resultData)
        }
      }).catch(() => {
      })
    },
  }
})

export default store
