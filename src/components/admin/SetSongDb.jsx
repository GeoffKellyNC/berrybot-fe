import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as musicActions from '../../store/music/music.actions'

import { Input, Button } from 'antd';

import styled from 'styled-components'

const SetSongDb = ({
    userData,
    addSong
}) => {
    const [songObj, setSongObj] = useState({
        song_name: '',
        song_artist: '',
        song_url: '',
        song_cover: '',
        genre: ''
    })

    const onChange = (e) => {
        setSongObj({
            ...songObj,
            [e.target.name]: e.target.value
        })
    }

    const submitSong = async  (e) => {
        e.preventDefault()
       await addSong(songObj)
         setSongObj({
            song_name: '',
            song_artist: '',
            song_url: '',
            song_cover: '',
            genre: ''
        })
        return
    }
  return (
    <SetSongDbContainer>
        <div className="title">
            <h1>Set Song</h1>
        </div>
        <div className="input-container">
            <Input
                placeholder="Song Name"
                style = {{
                        width: '30%',
                }}
                name = 'song_name'
                value = {songObj.song_name}
                onChange = {onChange}
            />
            <Input
                placeholder="Song Artist"
                style = {{
                        width: '30%',
                }}
                name = 'song_artist'
                value = {songObj.song_artist}
                onChange = {onChange}
            />
            <Input
                placeholder="Song URL"
                style = {{
                        width: '30%',
                }}
                name = 'song_url'
                value = {songObj.song_url}
                onChange = {onChange}
            />
            <Input
                placeholder="Song Cover"
                style = {{
                        width: '30%',
                }}
                name = 'song_cover'
                value = {songObj.song_cover}
                onChange = {onChange}
            />
            <Input
                placeholder="Genre"
                style = {{
                        width: '30%',
                }}
                name = 'genre'
                value = {songObj.genre}
                onChange = {onChange}
            />
            <Button
                onClick = {submitSong}
            >
                Submit Song
            </Button>
                
        </div>
    </SetSongDbContainer>
  )
}

export default connect(st => ({
    userData: st.userData
}), {
    addSong: musicActions.addSong
}) (SetSongDb) 



const SetSongDbContainer = styled.div`
   


`


// Song Object: 

// song_name: songObj.song_name,
// song_artist: songObj.song_artist,
// song_url: songObj.song_url,
// song_cover: songObj.song_cover,
// genre: songObj.genre,