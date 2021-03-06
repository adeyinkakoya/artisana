import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './mixins'
import './plugins'
import './filters'
import '@/styles/global.css'
import './directives/highlight.js'
import vuetify from './plugins/vuetify'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import { Plugins } from '@capacitor/core'
const { SplashScreen } = Plugins
Vue.use(VueToast, {
    position: "top"
})

// Inital Loading Overlay
Vue.use(Loading, {
    color: '#fff',
    backgroundColor: '#1a68ca',
    loader: 'spinner',
    opacity: 0.3
});

// Vue fragment plugin
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

// Layout template files
import Default from './layouts/Default.vue'
import Page from './layouts/Page.vue'
import Landing from './views/Landing.vue'

// Make layouts into Global Components. A Global component is available throughout the app. No need to import and register in components. Just add
Vue.component("default", Default)
Vue.component("page", Page)
Vue.component("landing", Landing)



Vue.config.productionTip = false

new Vue({
    store,
    router,
    vuetify,
    render: h => h(App),
    mounted() {
        SplashScreen.hide()
    },
}).$mount('#app')


// store.dispatch('getOptions').then(() => {
//     new Vue({
//         store,
//         router,
//         vuetify,
//         render: h => h(App)
//     }).$mount('#app')
// })