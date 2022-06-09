import * as types from './mutation-types'
import { generateFromString } from 'generate-avatar'


export const setUserWalletAccount = ({ commit }, data) => {
  if (data) {
    const avatar = generateFromString(data)
    commit(types.SET_USER_AVATAR_SUCCESS, avatar)
  }
  commit(types.SET_USER_WALLET_ACCOUNT_SUCCESS, data)
}

export const setUserWalletChainId = ({ commit }, data) => {
  commit(types.SET_USER_WALLET_CHAINID_SUCCESS, data)
}

export const setUserWalletNetwork = ({ commit }, data) => {
  commit(types.SET_USER_WALLET_NETWORK_SUCCESS, data)
}

export const setUserWalletEIP1559Support = ({ commit }, data) => {
  commit(types.SET_USER_WALLET_EIP1559_SUCCESS, data)
}

export const setUserInfo = ({ commit }, data) => {
  commit(types.SET_USER_INFO_SUCCESS, data)
}

export const setUserWalletBalance = ({ commit }, data) => {
  commit(types.SET_USER_WALLET_BALANCE_SUCCESS, data)
}