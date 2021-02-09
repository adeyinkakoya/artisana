import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import createPersistedState from "vuex-persistedstate";
import state from './state.js'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'
import user from './modules/user'



export default new Vuex.Store({

    state,
    getters,
    mutations,
    actions,
    modules: {
        user
    },
    plugins: [createPersistedState()],
})