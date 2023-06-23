import * as userTypes from './user.types'


export function userData(state = null, action){
    switch(action.type){
        case userTypes.SET_USER_DATA:
            return action.payload
        default:
            return sessionStorage.getItem('userData') ?
            JSON.parse(sessionStorage.getItem('userData')).userData : state
    }
}

export function scheduledMessages(state = [], action){
    switch(action.type){
        case userTypes.GET_SCHEDULED_MESSAGES:
            return action.payload;
        case userTypes.SET_SCHEDULED_MESSAGES:
            return [...state, action.payload]
        case userTypes.DELETE_SCHEDULED_MESSAGE:
            return state.filter(command => command.sid !== action.payload)
        default:
            return state
    }
}

export function customCommands(state = [], action){
    switch(action.type){
        case userTypes.GET_USER_COMMANDS:
            return action.payload;
        case userTypes.SET_USER_COMMANDS:
            return [...state, action.payload]
        case userTypes.ADD_USER_COMMAND:
            return [...state, action.payload]
        case userTypes.DELETE_USER_COMMAND:
            return state.filter(command => command.cid !== action.payload)
        default:
            return state
    }
}