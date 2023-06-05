import * as userTypes from '../user/user.types'
import * as authTypes from './auth.types'
import * as notifyTypes from '../notify/notify.types'
import axios from 'axios'
import { axiosWithAuth } from '../../util/axiosAuth'


const BASE_URL = process.env.REACT_APP_LOCAL_MODE ? process.env.REACT_APP_LOCAL_BASE_URL : process.env.REACT_APP_PROD_BASE_URL

export const loginUser = (code) => async dispatch => {
    try {
        console.log("LOGGING IN!!!!")
        const loginRes = await axios.post(`${BASE_URL}/auth/login`, 
        { code })
        const userData = loginRes.data

        if(userData.userData.user_paid){
            dispatch({
                type: authTypes.SET_AUTH_STATE,
                payload: true
            })

            dispatch({
                type: userTypes.SET_USER_DATA,
                payload: loginRes.data.userData
            })
        }

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

export const verifyUserAccessToken = () => async dispatch => {
    try {

        dispatch({
            type: authTypes.SET_IS_VERIFYING,
            payload: true
        })

        const verifyRes = await axiosWithAuth().get(`${BASE_URL}/auth/verify-accessToken`)

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