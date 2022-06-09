import * as types from './mutation-types'

export const setDappStatusOfBrowser = ({ commit }, data) => {
    commit(types.SET_DAPP_STATUS_OF_BROWSER_SUCCESS, data)
}

export const setDappIsReady = ({ commit }, data) => {
    commit(types.SET_DAPP_IS_READY_SUCCESS, data)
}

export const setDappIsInstallMetamask = ({ commit }, data) => {
    commit(types.SET_DAPP_IS_INSTALL_METAMASK_SUCCESS, data)
}