import { generateFromString } from 'generate-avatar'
export const getUser = state => state.user
export const getUserWalletAccount = state => state.user.wallet.account
export const getUserAvatar = state => {
  if (state.user.wallet.account) {
    return generateFromString(state.user.wallet.account)
  } else {
    return null
  }
}