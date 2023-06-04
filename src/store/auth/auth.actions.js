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

        console.log('LOGIN RES: ', loginRes.data) //!DEBUG

        const userData = loginRes.data

        if(userData.user_paid){
            dispatch({
                type: authTypes.SET_AUTH_STATE,
                payload: true
            })

            dispatch({
                type: userTypes.SET_USER_DATA,
                payload: userData
            })
        }

        return userData.user_paid

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