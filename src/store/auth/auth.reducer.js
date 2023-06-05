import * as authTypes from './auth.types'


export function isAuthenticated(state = false, action){
    switch(action.type){
        case authTypes.SET_AUTH_STATE:
            return action.payload
        default:
            return sessionStorage.getItem('isAuth') ? JSON.parse(sessionStorage.getItem('isAuth')) : state
    }
}

export function isVerifying(state = false, action){
    switch(action.type){
        case authTypes.SET_IS_VERIFYING:
            return action.payload
        default:
            return state
    }
}
