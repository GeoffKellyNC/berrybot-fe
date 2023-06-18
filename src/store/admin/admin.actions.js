import * as adminTypes from './admin.types'
import { axiosWithAuth } from '../../util/axiosAuth'

const BASE_URL = process.env.REACT_APP_PROD_BASE_URL


export const getPendingSongsFromDb = () => async dispatch => {
    try {
        const res = await axiosWithAuth().get(`${BASE_URL}/music/pending-songs`)

        console.log(res.data)
        dispatch({
            type: adminTypes.SET_PENDING_MUSIC,
            payload: res.data
        })

        return
    } catch (error) {
        console.log('ADMIN ERROR GETTING PENDING SONGS!')
        return
    }
}

export const updatePendingSong = (songId, status) => async dispatch => {
    try {
        const res = await axiosWithAuth().post(`${BASE_URL}/music/update-song-status`, { songId, status })


        console.log(res.data)

        if(res.status !== 200){
            return false
        }

        dispatch({
            type: adminTypes.UPDATE_PENDING_MUSIC,
            payload: songId
        })

        return


    } catch (error) {
        console.log('ADMIN ERROR UPDATING PENDING SONG!')
        return
    }
}