import * as tiwtchTypes from './twitch.types';



export const currentStreamData = (state = null, action) => {
    switch (action.type) {
        case tiwtchTypes.SET_CURRENT_STREAM_DATA:
            return action.payload;
        default:
            return state;
    }
};