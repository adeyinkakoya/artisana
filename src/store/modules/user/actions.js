import { api } from '../../../api/base'
import $router from '../../../router'
import Vue from 'vue'

export default {

    getUser: (context) => {
        //context.commit('AUTH_REQUEST')
        api.get('user')
            .then(res => {
                const user = res.data.data
                context.commit('ADD_USER_TO_STATE', user)
            })
            .catch(err => {
                console.log(err);
            })
    },



    loginUser: (context, user) => {
        //context.commit('AUTH_REQUEST')
        api.post('login', {
                email: user.email,
                password: user.password,
                device_name: user.device
            })
            .then(res => {

                const token = res.data
                if (token) {
                    localStorage.setItem('token', token)
                    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
                    context.dispatch('getUser')
                    context.commit('ADD_TOKEN_TO_STATE', token)
                }
            })
            .then(() => { $router.push({ name: 'dashboard' }) })
            .catch(err => {
                context.commit('ADD_ERRORS_TO_STATE', err.response.data.errors)
                localStorage.removeItem('token')
                let errors = Object.values(err.response.data.errors).flat()
                    // console.log(errors);
                errors.forEach((el) => {
                    // console.log(el);
                    Vue.$toast.error(el)
                })
            })

    },


    registerUser: (context, user) => {

        api.post('register', {
                name: user.name,
                email: user.email,
                password: user.password,
                telephone: user.telephone
            })
            .then(res => {
                context.commit('REG_SUCCESS_MESSAGE', res.data.message)
                localStorage.removeItem('token')
                $router.push({ name: 'login' })
                Vue.$toast.success(res.data.message)

            })
            .catch((err) => {

                context.commit('ADD_ERRORS_TO_STATE', err.response.data.errors)

                let errors = Object.values(err.response.data.errors).flat()
                    // console.log(errors);
                errors.forEach((el) => {
                    // console.log(el);
                    Vue.$toast.error(el)
                })


            })
    },



    logoutUser: (context) => {
        return new Promise((resolve, reject) => {

            api.post('logout')
                .then(() => {
                    context.commit('CLEAR_USER_AND_TOKEN_FROM_STATE')
                    context.commit('CLEAR_ERRORS_FROM_STATE')
                    context.commit('CLEAR_REG_SUCCESS_MESSAGE')
                    localStorage.removeItem('token')
                    delete api.defaults.headers.common['Authorization']
                    $router.push({ name: "login" })
                    resolve()
                })
                .catch(err => {
                    reject()
                    console.log(err);
                })
        })




    },
    resetPassword: (context, email) => {

        api.post('password-reset-link', {
                email: email,
            })
            .then(res => {

                Vue.$toast.success(res.data.message)
            })
            .catch((err) => {

                let errors = Object.values(err.response.data.errors).flat()
                    // console.log(errors);
                errors.forEach((el) => {
                    // console.log(el);
                    Vue.$toast.error(el)
                })


            })
    },

    // forgotPassword({ commit }, payload) {
    //     return new Promise((resolve, reject) => {
    //       commit(types.SHOW_LOADING, true)
    //       api
    //         .forgotPassword(payload)
    //         .then((response) => {
    //           if (response.status === 200) {
    //             commit(types.RESET_EMAIL_SENT, true)
    //             buildSuccess(
    //               {
    //                 msg: 'forgotPassword.RESET_EMAIL_SENT',
    //                 params: [payload.email],
    //                 timeout: 0
    //               },
    //               commit,
    //               resolve
    //             )
    //           }
    //         })
    //         .catch((error) => {
    //           handleError(error, commit, reject)
    //         })
    //     })
    //   }

}