import { axiosWithAuth } from "../../util/axiosAuth";
import * as twitchTypes from "./twitch.types";
import * as notifyTypes from "../notify/notify.types"
import { duration } from "@mui/material";

const BASE_URL = process.env.REACT_APP_LOCAL_MODE ? process.env.REACT_APP_LOCAL_BASE_URL : process.env.REACT_APP_PROD_BASE_URL



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