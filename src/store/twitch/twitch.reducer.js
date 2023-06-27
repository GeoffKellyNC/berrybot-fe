import * as twitchTypes from './twitch.types';



export const currentStreamData = (state = null, action) => {
    switch (action.type) {
        case twitchTypes.SET_CURRENT_STREAM_DATA:
            return action.payload;
        default:
            return state;
    }
};

export const addRunning = (state = false, action) => {
    switch (action.type) {
        case twitchTypes.SET_ADD_RUNNING:
            return action.payload;
        default:
            return state;
    }
}

export const twitchChatSettings = (state = null, action) => {
    switch (action.type) {
        case twitchTypes.SET_TWITCH_CHAT_SETTINGS:
            return action.payload;
        case twitchTypes.UPDATE_TWITCH_CHAT_SETTINGS:
            return action.payload;
        default:
            return state;
    }
}

export function twitchChatLog (state = [], action){
    switch(action.type){
        case twitchTypes.SET_TWITCH_LOG:
            return action.payload
        default:
            return state
    }
}

export function twitchMods (state = null, action){
    switch(action.type){
        case twitchTypes.SET_TWITCH_MODS:
            return action.payload
        default: 
            return state
    }
}