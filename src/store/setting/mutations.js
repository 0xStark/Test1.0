import * as types from './mutation-types'
const mutations = {
  [types.SET_LANG] (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

export default mutations