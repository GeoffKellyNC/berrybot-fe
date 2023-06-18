import { axiosWithAuth } from "../../util/axiosAuth";
import * as musicTypes from "./music.types";
import * as notifyTypes from '../notify/notify.types'


const BASE_URL = process.env.REACT_APP_PROD_BASE_URL;



export const getMusicData = () => async dispatch => {
    try {
        const musicData = await axiosWithAuth().get(`${BASE_URL}/music/all-music`)
        dispatch({
            type: musicTypes.SET_MUSIC_DATA,
            payload: musicData.data
        })

        return
    } catch (error) {
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: "There was an error getting music data " + error
        })
        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }, 5000)
    }
}

export const addSong = (songObj) => async dispatch => {
    try {
        const musicData = await axiosWithAuth().post(`${BASE_URL}/music/add-song`, { songObj })

        if(musicData.status === 200){
            console.log('SONG SET SUCCESSFULLY')
            return
        }
        console.log('SONG NOT SET SUCCESSFULLY NO ERROR')
        return
    } catch (error) {
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: "There was an error adding song " + error
        })
        setTimeout(() => {
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }, 5000)
    }
}