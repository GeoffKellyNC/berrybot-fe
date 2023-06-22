import { axiosWithAuth } from "../../util/axiosAuth";
// import * as userTypes from "./user.types";
import * as notifyTypes from "../notify/notify.types";
import * as userTypes from "./user.types"




const BASE_URL = process.env.REACT_APP_PROD_BASE_URL


export const getStripeId = (twitch_login) => async dispatch => {
    try {

        console.log('Twitch Login: ', twitch_login) 
        
        const res = await axiosWithAuth().post(`${BASE_URL}/twitch/get-stripe-id`, { twitch_login })


        console.log("Stripe ID: ", res.data)

        return res.data

    } catch (error) {
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: error.message
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })

        }, 5000)
    }
}


export const sendCusPortal = (stripeId) => async dispatch => {
    try {
        await axiosWithAuth().post(`${BASE_URL}/payments/customer-portal?session_id=${stripeId}`)

        return

    } catch (error) {
        console.log(error)
        return
    }
}

export const getScheduledMessages = () => async dispatch => {
    try{
        const res = await axiosWithAuth().get(`${BASE_URL}/twitch/scheduled-commands`)

        console.log(res.data)

        dispatch({
            type: userTypes.GET_SCHEDULED_MESSAGES,
            payload: res.data
        })

        return

    } catch(error){
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: error.message
        })

        setTimeout(() => {
            
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })

        }, 5000)

        console.log(error)
        return
    }

}

export const setScheduledMessage = (commandObj) => async dispatch => {
    try {
        const res = await axiosWithAuth().post(`${BASE_URL}/twitch/scheduled-commands`, commandObj)

        console.log('Set Scheduled Message: ', res) //!DEBUG

        if(res.status !== 200){
            dispatch({
                type: notifyTypes.SET_ERROR_NOTIFICATION,
                payload: 'Error setting scheduled message'
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
            type: userTypes.SET_SCHEDULED_MESSAGES,
            payload: commandObj
        })

        dispatch({
            type: notifyTypes.SET_APP_NOTIFICATION,
            payload: 'Scheduled message set!'
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_APP_NOTIFICATION
            })
        }
        , 5000)



        return
    } catch (error) {
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: 'Error setting scheduled message'
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }
        , 5000)
    }
}

export const deleteScheduledMessage = (commandId) => async dispatch => {
    try {
        const res = await axiosWithAuth().delete(`${BASE_URL}/twitch/scheduled-commands/${commandId}`)

        if(res.status !== 200){
            dispatch({
                type: notifyTypes.SET_ERROR_NOTIFICATION,
                payload: 'Error deleting scheduled message'
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
            type: userTypes.DELETE_SCHEDULED_MESSAGE,
            payload: commandId
        })

        dispatch({
            type: notifyTypes.SET_APP_NOTIFICATION,
            payload: 'Scheduled message deleted!'
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
            payload: 'Error deleting scheduled message'
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }
        , 5000)
    }
}