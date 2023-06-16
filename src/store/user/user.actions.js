import { axiosWithAuth } from "../../util/axiosAuth";
// import * as userTypes from "./user.types";
import * as notifyTypes from "../notify/notify.types";




const BASE_URL = process.env.REACT_APP_LOCAL_MODE ? process.env.REACT_APP_LOCAL_BASE_URL : process.env.REACT_APP_PROD_BASE_URL


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