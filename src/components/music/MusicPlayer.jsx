import React from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import styled from 'styled-components'

const MusicPlayer = ({
  currentSongPlaying
}) => {
  return (
    <MusicPlayerStyled> 
      {
        !currentSongPlaying ? 
          <div className="music-player-placeholder">
            <h1> No Song Currently Playing </h1>
          </div>
          :
          <ReactPlayer
                    url={currentSongPlaying}
                    width='400px'
                    height = '300px'
                    onEnded = {() => {
                        console.log('ended')
                    }}
                    playing = {true}
                    config = {{
                        soundcloud: {
                            options: {
                                show_artwork: false,
                                color: '#2b2d42',
                                auto_play: true
                            }
                        },
                        youtube: {
                            embedOptions: {
                                auto_play: 1
                            }
                    },
                    }}
                />
      }
    </MusicPlayerStyled>
  )
}

export default connect(st => ({
  currentSongPlaying: st.currentSongPlaying
}), null) (MusicPlayer)


const MusicPlayerStyled = styled.div`

  .music-player-placeholder {
          height: 250px;
          width: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: white;
          padding: 10px;
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
    }


`