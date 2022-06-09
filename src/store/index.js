import Vue from 'vue'
import Vuex from 'vuex'
import pub from './pub'
import setting from './setting'
import account from './account'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    setting,
    pub,
    account
  },
})