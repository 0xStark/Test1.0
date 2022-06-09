
<template>
  <div>
    <b-navbar type="is-white" wrapper-class="container" :style="'position:fixed;left:0px;right:0px;background-color: #fff;background-image: url(/img/Mask.png);background-size: 100%;z-index: 100;'">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="/img/Logo_set.png"
            style="height: 32px; width: 128px"
          />
        </b-navbar-item>
      </template>
      <template #start>
        <!-- <b-tooltip label="Coming soon" type="is-light"> -->
            <b-navbar-item  tag="router-link" :to="{ path: '#' }"><b-tooltip label="Coming soon" position="is-bottom" type="is-light">{{$t('Doc')}}</b-tooltip> </b-navbar-item>
        <!-- </b-tooltip> -->
      </template>
      <template #end>
        <div class="navRight">
          <b-tooltip label="Coming soon" position="is-bottom" type="is-light"><router-link :to="{ path: '#' }" class="navRightInner navRight01"></router-link></b-tooltip>
          <b-tooltip label="Coming soon" position="is-bottom" type="is-light"><router-link :to="{ path: '#' }" class="navRightInner navRight02"></router-link></b-tooltip>
        </div>
        <div v-show="dappStatus.isReady" class="navbar-item has-dropdown is-hoverable">
          <figure
            class="navbar-link is-arrowless image"
            
          >
            
            <img class="is-rounded" :src="'data:image/svg+xml;utf8,' + userAvatar">
           
          </figure>
          <div class="navbar-dropdown has-background-dark is-boxed is-right">
            <a class="navbar-item is-capitalized" @click="show.sign=true">{{ $t('User Info') }}</a>
            
            <a class="navbar-item is-capitalized">{{ $t('Wallet') }}</a>
            
          </div>
        </div>
      </template>
      
    </b-navbar>
    <!-- metamask install modal -->
    <b-modal class="has-text-centered">
      <div class="i-centered-h">
        
        <a href="https://www.google.com/chrome/" target="_blank" class="i-centered-v is-size-7 has-text-light m-5">
          <img src="/img/MetaMask.png" style="width:300px">
          
        </a>
      </div>
      <div class=" has-text-light is-size-7">{{$t('needMetamaskWarn')}}</div>
    </b-modal>

    <!-- support browser modal -->
    <b-modal v-model="show.validBrowser" class="has-text-centered">
      <div class="i-centered-h">
        <a href="https://www.mozilla.org" target="_blank" class="i-centered-v is-size-7 has-text-light m-5">
          <b-icon
              icon="google-chrome"
              type="is-default"
              size="is-large">
          </b-icon>
          Chrome
        </a>
        <a href="https://www.google.com/chrome/" target="_blank" class="i-centered-v is-size-7 has-text-light m-5">
          <b-icon
            type="is-default"
              icon="firefox"
              size="is-large">
          </b-icon>
          Firefox
        </a>
      </div>
      <div class=" has-text-light is-size-7">{{$t('needBrowserWarn')}}</div>
    </b-modal>
    <!-- full loading -->
    <b-loading :is-full-page="isFullPage" v-model="show.isFullLoading" :can-cancel="true">
      <div style="color:#fff;z-index:1000;justify-content: center;align-items: center; display: flex">
        <b-icon
          custom-class="i-turn"
            icon="web"
            size="">
        </b-icon> &nbsp;&nbsp; {{$t('Switching Network')}}
      </div>
    </b-loading>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import { mapGetters } from 'vuex'
// import {isValidBrowser, isPC} from '../api/util'
import Web3 from 'web3'
import MetaMaskOnboarding from '@metamask/onboarding'
export default {
  data() {
    return {
      scrollTop: 0,
      showNav: false,
      isFullPage: true,
      show: {
        isFullLoading: false,
        sign: false,
        nav: false,
        metaMaskInstall: false,
        validBrowser: false
      },
      signForm: {
        submitEnabled: false,
        email: '',
        firstName: '',
        lastName: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      locale: 'setting/getLocale',
      navbar: 'pub/getNavbar',
      user: 'account/getUser',
      userAvatar: 'account/getUserAvatar',
      walletAccount: 'account/getUserWalletAccount',
      dappStatus: 'pub/getDappStatus'
    })
  },
  mounted () {
    // console.log('a')
    // if(isPC && isValidBrowser()){
    //   console.log('a')
    //   this.initialMetamask()
    //   this.$store.dispatch('pub/setDappStatusOfBrowser', true)
      
    // } else {
    //   console.log('a1')
    //   this.show.validBrowser = true
    // }
  },
  methods: {
    handleSignOut () {
    },
    // 初始化Metamask
    async initialMetamask () {
      this.show.isFullLoading = true
      const { isMetaMaskInstalled } = MetaMaskOnboarding
      this.$store.dispatch('pub/setDappIsInstallMetamask', isMetaMaskInstalled())

      // 是否已安装Metamsk
      if (!isMetaMaskInstalled()) { 
        this.show.metaMaskInstall = true
        this.setUserDappIsReadyState()
      } else {
        
        this.setUserDappIsReadyState()
        ethereum.autoRefreshOnNetworkChange = false;
        this.getNetworkAndChainId();

        // 监听connect事件
        ethereum.on('connect', (info) => {
          console.log('connetc')
          console.log(info)
          this.setUserDappIsReadyState()
        })

        // 监听disconnect事件
        ethereum.on('disconnect', (error) => {
          console.log('disconnect')
          console.log(error)
          this.setUserDappIsReadyState()
        })

        // 监听更换链和网络事件
        ethereum.on('chainChanged', (chain) => {
          console.log('chainChanged')
          this.show.isFullLoading = true
          this.$store.dispatch('account/setUserWalletChainId', chain)
          // this.getNetworkAndChainId()
          //this.getAccountBalance(this.user.wallet.account)
          ethereum
            .request({
              method: 'eth_getBlockByNumber',
              params: ['latest', false],
            })
            .then((block) => {
              console.log('success')
              this.$store.dispatch('account/setUserWalletEIP1559Support', block.baseFeePerGas !== undefined)
              this.setUserDappIsReadyState()
              this.show.isFullLoading = false
            }).catch((error)=>{
              console.log(error)
            });
            console.log('fdf')
        });

        // 监听账户切换事件
        ethereum.on('accountsChanged', (newAccounts) => {
          console.log('account changed')
          console.log(newAccounts)
          ethereum
            .request({
              method: 'eth_getBlockByNumber',
              params: ['latest', false],
            })
            .then((block) => {
              this.$store.dispatch('account/setUserWalletEIP1559Support', block.baseFeePerGas !== undefined)
              this.setUserDappIsReadyState()
            });
          this.handleNewAccounts(newAccounts[0]);
        });

        try {
          console.log('ttttttttttt')
          // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
          const newAccounts = await ethereum.request({
            method: 'eth_accounts',
          });
          
          console.log(newAccounts)
          console.log(newAccounts[0])
          if(newAccounts[0])
            this.handleNewAccounts(newAccounts[0]);
          this.show.isFullLoading = false
        } catch (err) {
          console.error('Error on init when getting accounts', err);
        }
      }
    },
    async getNetworkAndChainId() {
      try {
        const chainId = await ethereum.request({
          method: 'eth_chainId',
        })
        this.$store.dispatch('account/setUserWalletChainId', chainId)

        const networkId = await ethereum.request({
          method: 'net_version',
        })

        this.$store.dispatch('account/setUserWalletNetwork', networkId)

        const block = await ethereum.request({
          method: 'eth_getBlockByNumber',
          params: ['latest', false],
        });
        console.log('block')
        console.log(block)
        this.$store.dispatch('account/setUserWalletEIP1559Support',block.baseFeePerGas !== undefined)
      } catch (err) {
        console.error(err);
      }
    },
    async getAccountBalance(account) {
      const balance = await ethereum.request({ method: 'eth_getBalance',params:[account,0],"id":1});
      this.$store.dispatch('account/setUserWalletBalance', Web3.utils.fromWei(balance, 'ether'))
    },
    handleNewAccounts(account) {
      this.$store.dispatch('account/setUserWalletAccount', account)
      this.getAccountBalance(account)
      this.setUserDappIsReadyState()
    },
    setUserDappIsReadyState () {
      let readState = false
      if(this.dappStatus.isSupportBrowser){
        if (!this.dappStatus.metaMaskInstall) { 
          readState = false
        } else {
          if (this.user.wallet.account) {
            if (this.user.email) {
              readState = true
            } else {
              readState = false
            }
          } else {
            readState = false
          }
          
        }
      } else {
        readState = false
      }
      console.log('setUserDappIsReadyState')
      console.log(readState)
      this.$store.dispatch('pub/setDappIsReady', readState)
    },
    isReadyDapp () {
      if(this.dappStatus.isSupportBrowser){
        if (!this.dappStatus.metaMaskInstall) { 
          this.show.metaMaskInstall = true
          return false
        } else {
          if (this.user.wallet.account) {
            if (this.user.email) {
              return true
            } else {
              this.show.sign = true
              return false
            }
          } else {
            this.connectWallet()
          }
          
        }
      } else {
        this.show.validBrowser = true
        return false
      }
      return true
    },
    async connectWallet () {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      this.handleNewAccounts(accounts[0]);
    },
    handleSignIn () {
      console.log('fff')
      if(!this.dappStatus.isReady) {
        this.isReadyDapp()
      }
    }
  }
};
</script>