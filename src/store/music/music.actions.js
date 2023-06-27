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
            return
        }
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

export const setCurrentSong = (songLink, songName) => async dispatch => {


    dispatch({
        type: musicTypes.SET_CURRENT_SONG_PLAYING,
        payload: songLink
    })

    dispatch({
        type: notifyTypes.SET_APP_NOTIFICATION,
        payload: `Now playing: ${songName}`
    })

    return
}


