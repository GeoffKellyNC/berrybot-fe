import * as adminTypes from './admin.types'



export function pendingMusic(state = null, action){
    switch(action.type){
        case adminTypes.SET_PENDING_MUSIC:
            return action.payload
        case adminTypes.UPDATE_PENDING_MUSIC:
            return state.filter(song => song.song_id !== action.payload)
        default:
            return state
    }
}