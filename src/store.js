import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:
    [
      {
        name: 'test1',
        cost: '500',
        text: 'qwerty',
        count: 5
      },
      {
        name: 'test2',
        cost: '800',
        text: 'asdfgh',
        count: 10
      }
    ]
  },
  getters: {
    PRODUCTS: state => {
      return state.products
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
