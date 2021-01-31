import $store from '../store'


/**
 * Check current user state on pageload and send to dashboard
 * @WARN Must be always first in middleware chain
//  */
export function CheckCurrentUserStateMiddleware(to, from, next) {
    // Check for current user
    const currentUser = $store.getters['user/currentUser']

    // Check if the current user object is not empty , which means a user is logged in.
    if (Object.keys(currentUser).length !== 0 && currentUser.constructor === Object)
        return next({ name: "Dashboard" })

    next()
}



export function checkAccessMiddleware(to, from, next) {
    const isLoggedIn = $store.getters['user/isLoggedIn']
    const isAuthRoute = to.matched.some(item => item.meta.isAuth)

    const isGuestRoute = to.matched.some(item => item.meta.isGuest)


    if (isAuthRoute && isLoggedIn) return next()
    if (isGuestRoute && isLoggedIn) return next({ name: 'dashboard' })
    if (isAuthRoute && !isLoggedIn) return next({ name: 'login' })
    next()
}



/**
 * Check access permission to auth routes and guest routes
 */
// export function checkAccessMiddleware(to, from, next) {
//     const currentUserId = $store.getters['user/currentUserId']
//     const isTokenAvailable = $store.getters['user/isLoggedIn']

//     console.log(currentUserId);
//     console.log(isTokenAvailable);
//     //const loggedInUser = currentUserId && isTokenAvailable

//     //console.log(loggedInUser);

//     const isAuthRoute = to.matched.some(item => item.meta.isAuth)
//     const isGuestRoute = to.matched.some(item => item.meta.isGuest)

//     if (isAuthRoute && currentUserId && isTokenAvailable) return next()
//     if (isGuestRoute && currentUserId && isTokenAvailable) return next({ name: 'dashboard' })

//     if (isAuthRoute && !currentUserId) return next({ name: 'login' }) // Good place to dispatch a logout action to be certain the token and user is cleared
//     next()
// }


export function setPageTitleMiddleware(to, from, next) {

    let title = process.env.VUE_APP_TITLE
    const pageDesc = to.matched.find(item => item.meta.desc)

    if (title && pageDesc) window.document.title = title + ' | ' + pageDesc.meta.desc
    next()
}

// export function setPageTitleMiddleware(to, from, next) {

//     let title = $store.getters.getWebsiteName
//     const pageDesc = to.matched.find(item => item.meta.desc)

//     if (title && pageDesc) window.document.title = title + ' | ' + pageDesc.meta.desc
//     next()
// }



// Only Guest users should see login ,register , forgotpassword routes. Logged in users who visit them will be redirected to dashboard. Don't also forget to hide thouse routes and make them only visible to guests.
export function redirectToDashboard(to, from, next) {

    // Check if route being visited has the meta guestOnly.
    const guestonly = to.matched.some(item => item.meta.guestOnly)

    // Check the store if a user is available i.e logged in
    const userId = $store.getters['user/currentUser'].id

    // Check for token availability
    //if route is gestonly and a user is logged in. That logged in user cant have access to it
    const isLoggedIn = $store.getters['user/isLoggedIn']

    if (guestonly && userId && isLoggedIn) {
        return next({ name: 'dashboard' })
    }
    next()
}