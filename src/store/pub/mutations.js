import * as types from './mutation-types'
const mutations = {
  [types.SET_DAPP_STATUS_OF_BROWSER_SUCCESS] (state, data) {
    state.dapp.isSupportBrowser = data
  },
  [types.SET_DAPP_IS_READY_SUCCESS] (state, data) {
    state.dapp.isReady = data
  },
  [types.SET_DAPP_IS_INSTALL_METAMASK_SUCCESS] (state, data) {
    state.dapp.metaMaskInstall = data
  },
}

export default mutations