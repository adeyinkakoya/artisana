export default {

    // Get Current loggedIn User Details
    currentUser: (state) => {
        return state.user
    },

    // Get Current loggedIn User id
    currentUserId: (state) => {
        return state.user.id
    },

    // Get login errors state
    errors: (state) => {
        return state.errors
    },

    // Get new user registration success message
    regSuccess: (state) => {
        return state.regSuccess
    },

    // Get token state as true or false
    isLoggedIn: (state) => {
        return !!state.token // returns true or false

    }

}