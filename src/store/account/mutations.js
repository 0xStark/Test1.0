import * as types from './mutation-types'
const mutations = {
  [types.SET_USER_AVATAR_SUCCESS] (state, data) {
    state.user.gravatar = data
  },
  [types.SET_USER_WALLET_ACCOUNT_SUCCESS] (state, data) {
    state.user.wallet.account = data
  },
  [types.SET_USER_WALLET_CHAINID_SUCCESS] (state, data) {
    state.user.wallet.chainId = data
  },
  [types.SET_USER_WALLET_NETWORK_SUCCESS] (state, data) {
    state.user.wallet.networkId = data
  },
  [types.SET_USER_WALLET_EIP1559_SUCCESS] (state, data) {
    state.user.wallet.eIP1559Support = data
  },
  [types.SET_USER_WALLET_BALANCE_SUCCESS] (state, data) {
    state.user.wallet.balance = data
  },
  [types.SET_USER_INFO_SUCCESS] (state, data) {
    state.user.email = data.email
    state.user.firstName = data.firstName
    state.user.lastName = data.lastName
  }
}

export default mutations