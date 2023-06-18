import React from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'

import MusicPlayer from './MusicPlayer'

const Music = () => {
  return (
    <MusicContainer>
        <div className = 'music-title'>
            <h1>Music</h1>
        </div>
        <MusicPlayer />
    </MusicContainer>

  )
}

export default connect(st => ({
    userData: st.userData
}),{

}) (Music)


const MusicContainer = styled.div`

.music-title {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    font-size: ${pr => pr.theme.font.size.xxl};
    font-family: ${pr => pr.theme.font.family.primary};
    background-image: linear-gradient(to right, #a603ff, #d900c9, #ee0097, #ef006c, #e4004b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

`