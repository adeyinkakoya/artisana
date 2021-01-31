export default {

    token: localStorage.getItem('token') || '',
    user: {},
    errors: [],
    regSuccessMessage: '',


}
// All these are initial state when the app is opened.
// Token initial state is to go local storage to get your token. If it exists , it means youve registered and logged into the app before. If not logged in , its empty and will be set when you log into the app