import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
    user: {
        email: 'xy0601@gmail.com',
        firstName: 'ying',
        lastName: 'xiong',
        gravatar: '',
        wallet: {
          networkId: null,
          chainId: null,
          account: null,
          balance: 0,
          eIP1559Support: false,
          networkEnum: {
            '1': 'Ethereum Mainnet',
            '2': 'Deprecated Morden Test Network',
            '3': 'Ropsten Test Network',
            '4': 'Rinkeby Test Network',
            '42': 'Kovan test network',
            '4447': 'Truffle Develop Network',
            '5777': 'Ganache',
            '666': 'Daniel Private Blockchain',
            '421611': 'RinkArby Testnet Bridge',
            '42161': 'Arbitrum One Bridge'
          }
        }
    }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}