import * as musicTypes from './music.types'



export function music(state = null, action){
    switch(action.type){
        case musicTypes.SET_MUSIC_DATA:
            return action.payload
        default:
            return state
    }
}

export function currentSongPlaying(state = null, action){
    switch(action.type){
        case musicTypes.SET_CURRENT_SONG_PLAYING:
            return action.payload
        default:
            return state
    }
}