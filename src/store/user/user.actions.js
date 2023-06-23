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
       const url =  await axiosWithAuth().post(`${BASE_URL}/payments/customer-portal/${stripeId}`)

       if(url.data.length < 1) return
       
       window.location.href = url.data

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

export const getCustomCommands = () => async dispatch => {
    try {
        const res = await axiosWithAuth().get(`${BASE_URL}/twitch/twitch-chat-commands`)


        console.log('Get Custom Commands: ', res.data) //!DEBUG

        if(res.status !== 200){
            dispatch({
                type: notifyTypes.SET_ERROR_NOTIFICATION,
                payload: 'Error getting custom commands'
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
            type: userTypes.GET_USER_COMMANDS,
            payload: res.data
        })

        return

    } catch (error) {
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: 'Error getting custom commands'
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }
        , 5000)
    }
}

export const setCustomCommand = (commandObj) => async dispatch => {
    try {
        const res = await axiosWithAuth().post(`${BASE_URL}/twitch/twitch-chat-commands`, commandObj)

        console.log(res.data)

        if(res.status !== 200){
            dispatch({
                type: notifyTypes.SET_ERROR_NOTIFICATION,
                payload: 'Error setting custom command'
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
            type: userTypes.SET_USER_COMMANDS,
            payload: commandObj
        })

        dispatch({
            type: notifyTypes.SET_APP_NOTIFICATION,
            payload: 'Custom command set!'
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
            payload: 'Error setting custom command'
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }
        , 5000)
    }
}

export const deleteCustomCommand = (commandId) => async dispatch => {
    try {
        const res = await axiosWithAuth().delete(`${BASE_URL}/twitch/twitch-chat-commands/${commandId}`)

        if(res.status !== 200){
            dispatch({
                type: notifyTypes.SET_ERROR_NOTIFICATION,
                payload: 'Error deleting custom command'
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
            type: userTypes.DELETE_USER_COMMAND,
            payload: commandId
        })

        dispatch({
            type: notifyTypes.SET_APP_NOTIFICATION,
            payload: 'Custom command deleted!'
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
            payload: 'Error deleting custom command'
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }
        , 5000)
    }
}


