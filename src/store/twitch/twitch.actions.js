import { axiosWithAuth } from "../../util/axiosAuth";
import * as twitchTypes from "./twitch.types";
import * as notifyTypes from "../notify/notify.types"

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
            type: notifyTypes.SET_CRITICAL_NOTIFICATION,
            payload: err.message
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_CRITICAL_NOTIFICATION
            })
        }
            , 5000)
      
    }
};