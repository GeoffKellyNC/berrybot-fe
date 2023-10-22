import { axiosWithAuth } from "../../util/axiosAuth";
import * as twitchTypes from "./twitch.types";
import * as notifyTypes from "../notify/notify.types"

const BASE_URL = process.env.REACT_APP_PROD_BASE_URL



export const getCurrentStreamData = () => async dispatch => {
    try {
        const res = await axiosWithAuth().post(`${BASE_URL}/twitch/get-current-stream-data`)

        dispatch({
            type: twitchTypes.SET_CURRENT_STREAM_DATA,
            payload: res.data.data.length > 0 ? res.data.data[0] : null
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
            payload: adRes.data.data.message + " " + adRes.data.data.length + " seconds"
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

        return
    }
}

export const runTwitchPoll = (title, duration, pollOptions) => async dispatch => {
    try {
        const pollRes = await axiosWithAuth().post(`${BASE_URL}/twitch/start-twitch-poll`, { title, duration, pollOptions })

        console.log(pollRes)
        console.log(pollRes.data.message)

        if(pollRes.data.error){
            console.log("OK ERROR")
            dispatch({
                type: notifyTypes.CLEAR_APP_NOTIFICATION
            })
            
            dispatch({
                type: notifyTypes.SET_ERROR_NOTIFICATION,
                paylaod: pollRes.data.message
            })

            setTimeout(() => {
                dispatch({
                    type: notifyTypes.CLEAR_APP_NOTIFICATION
                })
            }, 5000)

            return
        }

        return

        
    } catch (error) {

        console.log(error)
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

export const createTwitchClip = () => async dispatch => {
    try {
        const clipRes = await axiosWithAuth().post(`${BASE_URL}/twitch/create-twitch-clip`)


        // dispatch({
        //     type: notifyTypes.SET_APP_NOTIFICATION,
        //     payload: JSON.parse(clipRes.data._body).message ? JSON.parse(clipRes.data._body).message : 'ERROR: Clip not created'
        // })

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

export const getTwitchChatLogs = () => async dispatch => {
    try {
        const res = await axiosWithAuth().get(`${BASE_URL}/twitch/chat-logs`)

        dispatch({
            type: twitchTypes.SET_TWITCH_LOG,
            payload: res.data
        })

        return

    } catch (error) {
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: error.response.data.message ? error.response.data.message : 'Error getting Twitch Chat Logs'
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

export const getTwitchMods = () => async dispatch => {
    try {
        const res = await axiosWithAuth().get(`${BASE_URL}/twitch/twitch-mods`)

        dispatch({
            type: twitchTypes.SET_TWITCH_MODS,
            payload: res.data
        })

        let isMod

        res.data.forEach(mod => {
            if(mod.user_login === 'xberrybot'){
                isMod = true
            }
        })

        if(!isMod){
            dispatch({
                type: notifyTypes.SET_ERROR_NOTIFICATION,
                payload: 'XberryBot is not a mod in your channel. Please mod XberryBot to use the Twitch Chat features'
            })

            setInterval(() => {
                dispatch({
                    type: notifyTypes.SET_ERROR_NOTIFICATION,
                    payload: 'XberryBot is not a mod in your channel. Please mod XberryBot to use the Twitch Chat features'
                })
            }, 8000)

        }

        return
        
    } catch (error) {
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: error.response.data.message ? error.response.data.message : 'Error getting Twitch Mods'
        })
    }
}


export const getTwitchChatters = () => async dispatch => {
    try {
        console.log('GETTING TWITCH CHATTERS')
        const res = await axiosWithAuth().get(`${BASE_URL}/twitch/twitch-chatters`)

        console.log('TWITCH CHATTERS', res.data)

        dispatch({
            type: twitchTypes.SET_TWITCH_CHATTERS,
            payload: res.data.data
        })

        dispatch({
            type: twitchTypes.SET_TWITCH_CHATTER_COUNT,
            payload: res.data.total
        })


        return
        
    } catch (error) {
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: error.response.data.message ? error.response.data.message : 'Error getting Twitch Chatters'
        })

        console.log('ERROR GETTING TWITCH CHATTERS', error)
    }
}