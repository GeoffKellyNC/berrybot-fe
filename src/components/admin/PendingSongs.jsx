import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as adminActions from '../../store/admin/admin.actions'

import { AiFillCheckCircle } from 'react-icons/ai'
import { RiCloseCircleFill } from 'react-icons/ri'

const PendingSongs = ({
    pendingMusic,
    updatePendingSong,
    getSongs
}) => {

    const handleStatusChange = async (e, songId, status) => {
        e.preventDefault()
        await updatePendingSong(songId, status)
        return
    }


  return (
    <PendingSongsWrapper>
      <div className="title">
        <h1>Pending Songs</h1>
      </div>
      <PendingSongsList>
        {pendingMusic ? pendingMusic.map((song, idx) => (
            <div className="song" key={idx}>
              <div className='song-container song-title'>
                <span>Title: </span>
                <span>{ song.song_name }</span>
              </div>
              <div className=' song-container song-artist'>
                <span>Artist: </span>
                <span>{ song.song_artist }</span>
              </div>
              <div className='song-container song-genre'>
                <span>Genre: </span>
                <span>{ song.genre ? song.genre : 'No Info' }</span>
              </div>
              <div className='song-container song-url'>
                <span>URL: </span>
                <a href={song.song_url} target="_blank" rel="noreferrer noopener"> LINK </a>
              </div>
              <div className = 'btn-container'>
                    <AiFillCheckCircle 
                        className='btn'
                        onClick={e => handleStatusChange(e, song.song_id, 'approved')}/>
                    <RiCloseCircleFill 
                        className='btn'
                        onClick={e => handleStatusChange(e, song.song_id, 'denied')} />
                </div>
            </div>
        )) : 'No Pending Songs'}
      </PendingSongsList>
    </PendingSongsWrapper>
  )
}

export default connect(st => ({
  pendingMusic: st.pendingMusic
}), {
    updatePendingSong: adminActions.updatePendingSong
})(PendingSongs)

const PendingSongsWrapper = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  font-family: ${pr => pr.theme.font.family.primary};
`

const PendingSongsList = styled.div`
  width: 100%;
  max-height: 400px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${pr => pr.theme.colors.dashboard_background};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    width: 60%;
  }

  .song {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    background-color: ${pr => pr.theme.colors.primary};
    display: flex;
    flex-direction: column;
    gap: 5px;

    .song-container {
      font-size: 14px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;

      &:first-of-type {
        font-size: 16px;
      }

      span {
        color: white;
      }

      a {
        color: ${pr => pr.theme.colors.link_color};
        word-wrap: break-word;
      }
    }
  }

  .song-url {
    width: 80%;
  }
  
  .title {
    font-family: ${pr => pr.theme.font.family.primary};
    background-image: linear-gradient(to right, #a603ff, #d900c9, #ee0097, #ef006c, #e4004b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
  }

    .btn-container {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 10px;
    }

    .btn {
        font-size: 20px;
        color: white;
        cursor: pointer;
    }
`
