import * as types from './mutation-types'

export const setLocale = ({ commit }, data) => {
  commit(types.SET_LANG, data)
}