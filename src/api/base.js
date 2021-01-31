import axios from 'axios'
import $store from '../store/'
import Vue from 'vue'

// import Loading from 'vue-loading-overlay';
// import 'vue-loading-overlay/dist/vue-loading.css';

// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'


let config = {
    baseURL: process.env.VUE_APP_BASE_API,
    headers: {
        'Accept': 'application/json'
    }
    //timeout: 60 * 1000, // Timeout
    //withCredentials: true, // Check cross-site Access-Control. Only for SPA authentication
};

// create an axios instance and export
export const api = axios.create(config)

// For every request check if the token is available and set it as Authorization header.
// Ternery operators if token is set means its not empty , set to "Bearer toekn value" else set to empty
const token = localStorage.getItem('token')
api.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : "";

let loader = null
api.interceptors.request.use(
    function(config) {
        // Do something before request is sent

        loader = Vue.$loading.show()
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

function hideLoader() {
    loader && loader.hide();
    loader = null;
}


// Add a response interceptor
api.interceptors.response.use(
    function(response) {
        // Do something with response data
        hideLoader()

        return response;
    },
    function(error) {

        // error 401 is unauthorized. Means the request sent could not be authenticated either token unavailable or token expired, hence the need for a new token. So log the out so they can login and get a fresh token
        if (error.status === 401 && error.config && !error.config.__isRetryRequest) {
            $store.dispatch("user/logoutUser")
        }
        hideLoader()
        return Promise.reject(error);

    }
);