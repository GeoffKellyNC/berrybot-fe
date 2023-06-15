import * as tiwtchTypes from './twitch.types';



export const currentStreamData = (state = null, action) => {
    switch (action.type) {
        case tiwtchTypes.SET_CURRENT_STREAM_DATA:
            return action.payload;
        default:
            return state;
    }
};

export const addRunning = (state = false, action) => {
    switch (action.type) {
        case tiwtchTypes.SET_ADD_RUNNING:
            return action.payload;
        default:
            return state;
    }
}

export const twitchChatSettings = (state = null, action) => {
    switch (action.type) {
        case tiwtchTypes.SET_TWITCH_CHAT_SETTINGS:
            return action.payload;
        case tiwtchTypes.UPDATE_TWITCH_CHAT_SETTINGS:
            return action.payload;
        default:
            return state;
    }
}