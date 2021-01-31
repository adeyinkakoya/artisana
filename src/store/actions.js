import Vue from 'vue'
import axios from 'axios'
export default {

    // init({ dispatch }) {

    //     return Promise.all([
    //         dispatch('getoptions')
    //         // ...
    //     ])

    // },


    getOptions(context) {
        let loader = Vue.$loading.show();
        return axios.get(process.env.VUE_APP_BASE_API + 'options')
            .then((response) => {

                context.commit('SET_OPTIONS', response.data.data);
                //console.log(context.rootGetters.getWebsiteName);
                loader.hide();
            })
            .catch(function(error) {
                console.log(error);
            });
    },




}