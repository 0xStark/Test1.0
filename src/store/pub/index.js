import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
    locales: ['en', 'cn'],
    locale: 'cn',
    dapp: {
      isReady: false,
      isSupportBrowser: false,
      metaMaskInstall: false,
    }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}