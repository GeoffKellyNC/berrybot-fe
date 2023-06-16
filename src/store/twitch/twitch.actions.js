import { axiosWithAuth } from "../../util/axiosAuth";
import * as twitchTypes from "./twitch.types";
import * as notifyTypes from "../notify/notify.types"

const BASE_URL = process.env.REACT_APP_PROD_BASE_URL



export const getCurrentStreamData = () => async dispatch => {
    try {
        const res = await axiosWithAuth().post(`${BASE_URL}/twitch/get-current-stream-data`)

        console.log("Current Stream Data: ", res.data.data)
        dispatch({
            type: twitchTypes.SET_CURRENT_STREAM_DATA,
            payload: res.data.data > 0 ? res.data.data : null
        })
    } catch (err) {
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: err.message
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }
            , 5000)
      
    }
};

export const runTwitchAd = (duration) => async dispatch => {
    try {

        const adRes = await axiosWithAuth().post(`${BASE_URL}/twitch/run-twitch-ad`, { duration })

        console.log("Ad Response: ", adRes.data)

        if (adRes.data.status === 400){
            dispatch({
                type: notifyTypes.SET_ERROR_NOTIFICATION,
                payload: adRes.data.message
            })
    
            setTimeout(() => {
                dispatch({
                    type: notifyTypes.CLEAR_ERROR_NOTIFICATION
                })
            }
                , 5000)
            return
        }

        dispatch({
            type: twitchTypes.SET_ADD_RUNNING,
            payload: true
        })

        setTimeout(() => {
            dispatch({
                type: twitchTypes.SET_ADD_RUNNING,
                payload: false
            })
        }, duration * 1000)

        dispatch({
            type: notifyTypes.SET_APP_NOTIFICATION,
            payload: adRes.data.message
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_APP_NOTIFICATION
            })
        }
            , 5000)



        
    } catch (error) {
        console.log('Error: ', error) //!DEBUG
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: error.response.data.message ? error.response.data.message : error.response.data.error
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }
            , 5000)

        return
    }
}

export const runTwitchPoll = (title, duration, pollOptions) => async dispatch => {
    try {
        const pollRes = await axiosWithAuth().post(`${BASE_URL}/twitch/start-twitch-poll`, { title, duration, pollOptions })

        console.log("Poll Response: ", pollRes.data)
        
    } catch (error) {
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: error.response.data.message ? error.response.data.message : error.response.data.error
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }
            , 5000)
    }
}

export const createTwitchClip = () => async dispatch => {
    try {
        const clipRes = await axiosWithAuth().post(`${BASE_URL}/twitch/create-twitch-clip`)

        console.log("Clip Response: ", clipRes.data)

        dispatch({
            type: notifyTypes.SET_APP_NOTIFICATION,
            payload: clipRes.data.message
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_APP_NOTIFICATION
            })
        }
            , 5000)
    } catch (error) {
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: error.response.data.message ? error.response.data.message : error.response.data.error
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }
            , 5000)
    }
}


export const getTwitchChatSettings = () => async dispatch => {
    try {
        const res = await axiosWithAuth().get(`${BASE_URL}/twitch/get-twitch-chat-settings`)


        if(res.status !== 200){
            dispatch({
                type: notifyTypes.SET_ERROR_NOTIFICATION,
                payload: 'Error getting Twitch Chat Settings'
            })

            setTimeout(() => {
                dispatch({
                    type: notifyTypes.CLEAR_ERROR_NOTIFICATION
                })
            }
                , 5000)
        }

        dispatch({
            type: twitchTypes.SET_TWITCH_CHAT_SETTINGS,
            payload: res.data
        })

        return



    } catch (error) {
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: error.response.data.message ? error.response.data.message : 'Error getting Twitch Chat Settings'
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }
            , 5000)
            
    }
}

export const updateTwitchChatSetting = (setting, value) => async dispatch => {
    try {
        const res = await axiosWithAuth().post(`${BASE_URL}/twitch/update-twitch-chat-settings`, { setting, value })

        return res.data


    } catch (error) {
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: error.response.data.message ? error.response.data.message : 'Error updating Twitch Chat Settings'
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }
            , 5000)
    }
}

export const updateUserAiConfig = (aiConfig) => async dispatch => {
    try {
        const res = await axiosWithAuth().post(`${BASE_URL}/twitch/update-user-ai-settings`, { aiConfig })

        console.log('AI RES: ', res.data) //!DEBUG
        
    } catch (error) {
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: error.response.data.message ? error.response.data.message : 'Error updating Twitch Chat Settings'
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }
            , 5000)

        return
    }
}