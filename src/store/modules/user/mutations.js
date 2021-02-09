export default {

    ADD_USER_TO_STATE(state, user) {
        state.user = user
    },

    ADD_TOKEN_TO_STATE: (state, token) => {
        state.token = token
    },

    REG_SUCCESS_MESSAGE: (state, message) => {
        state.regSuccessMessage = message
    },

    CLEAR_REG_SUCCESS_MESSAGE: (state) => {
        state.regSuccessMessage = ''
    },
    ADD_ERRORS_TO_STATE: (state, errors) => {
        state.errors = errors
    },
    CLEAR_ERRORS_FROM_STATE: (state) => {
        state.errors = ''
    },
    CLEAR_USER_AND_TOKEN_FROM_STATE: (state) => {
        state.token = ''
        state.user = {}
    }
}