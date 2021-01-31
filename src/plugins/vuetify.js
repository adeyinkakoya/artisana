import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdi' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {
        themes: {
            light: {
                primary: "#1a68ca",
                secondary: "#ffa500",
                accent: "#438ae3",
                error: "#b72323",
                warning: "#e91e63",
                info: "#f44336",
                success: "#673ab7"
            }
        }
    }
}

export default new Vuetify(opts)