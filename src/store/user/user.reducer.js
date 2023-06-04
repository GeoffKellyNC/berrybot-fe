import * as userTypes from './user.types'


export function userData(state = {}, action){
    switch(action.type){
        case userTypes.SET_USER_DATA:
            return action.payload
        default:
            return state
    }
}