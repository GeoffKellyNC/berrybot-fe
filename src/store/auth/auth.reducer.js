import * as authTypes from './auth.types'


export function isAuthenticated(state = false, action){
    switch(action.type){
        case authTypes.SET_AUTH_STATE:
            return action.payload
        default:
            return state
    }
}
