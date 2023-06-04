import * as userTypes from '../user/user.types'
import * as authTypes from './auth.types'
import * as notifyTypes from '../notify/notify.types'
import axios from 'axios'
import { axiosWithAuth } from '../../util/axiosAuth'


const BASE_URL = process.env.REACT_APP_LOCAL_MODE ? process.env.REACT_APP_LOCAL_BASE_URL : process.env.REACT_APP_PROD_BASE_URL

export const loginUser = (code) => async dispatch => {
    try {
        const loginRes = await axios.post(`${BASE_URL}/auth/login`, 
        { code })
    } catch (error) {
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