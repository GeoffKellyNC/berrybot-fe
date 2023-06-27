import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as musicActions from '../../store/music/music.actions'
import { Modal, Button } from 'antd'

import styled from 'styled-components'
import Song from './Song'

import MusicPlayer from './MusicPlayer'

const Music = ({
  userData,
  music,
  setCurrentSong,
  musicRef
}) => {
  const [openMusic, setOpenMusic] = useState(false)

  const onCancel = () => {
    setOpenMusic(false)
  }

  const handleOpenMusic = () =>  {
    setOpenMusic(!openMusic)
  }

  return (
    <MusicContainer ref = {musicRef}>
      <div className='music-header'>
        <h1>Music</h1>
        <Button 
          type='primary'
          onClick={handleOpenMusic}
          className = 'open-music-btn'
          style={{
            "height": "30px",
            "width": "auto",
            "fontSize": "10px",
            "color": "white",
          }}
        > 
        View Music 
        </Button>
      </div>
      <MusicPlayer />
      <GradientModal
        title='Music Selection'
        visible={openMusic}
        onOk={onCancel}
        onCancel={onCancel}
        bodyStyle={{
          "height": "700px",
          "overflowY": "scroll",
        }}
        width={1000}
      >
      <SongsContainer>
        {
          !music || music.length < 0 ? (
            <div className='no-music'>
              <span>Getting Music....</span>
            </div>
          ) : (
            music.map((song, idx) => {
              return (
                <SongItem key={idx}>
                  <Song 
                    songData={song} 
                    setCurrentSong={setCurrentSong}
                    onCancel = {onCancel} />
                </SongItem>
              )
            })
          )
        }
      </SongsContainer>
      </GradientModal>
    </MusicContainer>
  )
}

export default connect(st => ({
    userData: st.userData,
    music: st.music
}),{
  setCurrentSong: musicActions.setCurrentSong
})(Music)

const GradientModal = styled(Modal)`
  .ant-modal-content {
    background: linear-gradient(to right,#192531, #101f31, #091931, #081130, #0d042d);
  }

  .ant-modal-title {
    color: white;
    background: linear-gradient(to right, #192531, #101f31, #091931, #081130, #0d042d);
    }


`;


const MusicContainer = styled.div`
  border: 1px solid ${pr => pr.theme.colors.primary};
  .music-header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2%;
  }

  h1 {
    font-size: ${pr => pr.theme.font.size.xxl};
    color: ${pr => pr.theme.colors.primary};
    font-family: ${pr => pr.theme.font.family.secondary};
  }
`
const SongsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; 
  overflow-y: scroll;
`;

const SongItem = styled.div`
  flex: 1 0 200px; 
  margin: 5px; 
`;

