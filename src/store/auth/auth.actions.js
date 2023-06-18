import * as userTypes from '../user/user.types'
import * as authTypes from './auth.types'
import * as notifyTypes from '../notify/notify.types'
import axios from 'axios'
import { axiosWithAuth } from '../../util/axiosAuth'


const BASE_URL =  process.env.REACT_APP_PROD_BASE_URL

export const loginUserTwitch = (code) => async dispatch => {
    try {
        console.log("LOGGING IN!!!!")
        const loginRes = await axios.post(`${BASE_URL}/auth/login`, 
        { code })
        const userData = loginRes.data

        if(!userData.userData.user_paid){

            dispatch({
                type: userTypes.SET_USER_DATA,
                payload: loginRes.data.userData
            })
            sessionStorage.setItem('userData', JSON.stringify(userData))

            return 
        }

        dispatch({
            type: authTypes.SET_AUTH_STATE,
            payload: true
        })

        dispatch({
            type: userTypes.SET_USER_DATA,
            payload: loginRes.data.userData
        })

        dispatch({
            type: authTypes.SET_USER_LEVEL,
            payload: loginRes.data.userData.account_type
        })

        // set userdata to session storage

        sessionStorage.setItem('userData', JSON.stringify(userData))
        sessionStorage.setItem('authData', JSON.stringify(userData.authData))
        sessionStorage.setItem('isAuth', true)

        return userData.userData.user_paid

    } catch (error) {
        console.log('THERE WAS AN ERROR: ', error.message)
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: "There was an error logging in " + error 
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }
        , 3000)
    }
}

export const logoutUserTwitch = (channel) => async dispatch => {
    try {
        console.log("LOGGING OUT!!!!")
        await axiosWithAuth().post(`${BASE_URL}/auth/logout`, { channel })


        sessionStorage.removeItem('userData')
        sessionStorage.removeItem('authData')
        localStorage.clear()
        sessionStorage.clear()

        window.location.href = '/'

        return true

    } catch (error) {
        console.log('THERE WAS AN ERROR: ', error.message)
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: "There was an error logging out " + error 
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }
        , 3000)
    }
}

export const verifyUserTwitchAccessToken = () => async dispatch => {
    try {

        dispatch({
            type: authTypes.SET_IS_VERIFYING,
            payload: true
        })

        await axiosWithAuth().get(`${BASE_URL}/auth/verify-accessToken`)

        dispatch({
            type: authTypes.SET_IS_VERIFYING,
            payload: false
        })

        dispatch({
            type: authTypes.SET_AUTH_STATE,
            payload: true
        })

        
    } catch (error) {

        dispatch({
            type: authTypes.SET_AUTH_STATE,
            payload: false
        })

        sessionStorage.setItem('isAuth', false)

        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: "There was an error verifying your access token" + error
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }
        , 3000)

        return

    }
}


//* YOUTUBE FUNCTIONS

export const loginUserYouTube = () => async dispatch => {
    try {
        console.log("LOGGING IN YOUTUBE!!!!")
        const loginRes = await axios.get(`${BASE_URL}/youtube/auth/login-youtube`)

        console.log("LOGIN RES YT: ", loginRes.data)

        window.location.href = loginRes.data

        return

    } catch (error) {
        console.log('THERE WAS AN ERROR: ', error.message)
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: "There was an error logging in " + error 
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }
        , 3000)
    }
}

export const sendYTAuthCode = (code) => async dispatch => {
    try {
        console.log("SENDING CODE TO SERVER: ", code)
        const loginYTRes = await axios.post(`${BASE_URL}/youtube/auth/login-youtube`, 
        { code })

        console.log("LOGIN RES YT: ", loginYTRes.data) //! DEBUG


        return

    } catch (error) {
        console.log('THERE WAS AN ERROR: ', error.message)
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: "There was an error logging in " + error 
        })

        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }
        , 3000)
    }

}