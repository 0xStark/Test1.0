import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'video.js/dist/video-js.css'
import './assets/css/custom.css'

import VueI18n from 'vue-i18n'

import 'animate.css'

Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'en',
    messages: {
        'cn': require('./locale/cn'),
        'en': require('./locale/en')
    }
})

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')