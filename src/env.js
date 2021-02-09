import $store from './store'
//import { mapGetters } from 'vuex'

export function domain_title() {
    return $store.getters.getWebsiteName
}