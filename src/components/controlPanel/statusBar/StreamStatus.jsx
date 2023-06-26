import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { CiStreamOn } from 'react-icons/ci'


// csd: currentStreamData => state

const StreamStatus = ({
    csd,
    userData
}) => {
  return (
    <StreamState>
        <div className = 'affiliate-status status-section'>
            { userData.twitch_streamer_status.length > 0 ? <span className = 'status-text'> Affiliate </span> : <span className = 'status-text'> Not Affiliate </span> }
        </div>
        <div className = 'stream-status status-section'>
            <CiStreamOn
                className='stream-icon'
            />
            {
                csd && csd.type === 'live' ? <span className = 'status-text'> Live </span> : <span className = 'status-text'> Offline </span>
            }
        </div>
        <div className='stream-game status-section'>
            <span className = 'game-text'> Category:  </span>
            <span className='status-text'> {csd ? csd.game_name : 'Offline'} </span>
        </div>
        <div className='stream-viewers status-section'>
            <span className = 'viewers-text'> Viewers:  </span>
            <span className='status-text'> {csd ? csd.viewer_count : 0} </span>
        </div>
        <div className='stream-title status-section'>
            <span className = 'title-text'> Title:  </span>
            <span className='status-text'> {csd ? csd.title : 'Offline'} </span>
        </div>
    </StreamState>
  )
}

export default connect(st => ({
    csd: st.currentStreamData,
    userData: st.userData
}),{

}) (StreamStatus)


const StreamState = styled.div`
    background-image: linear-gradient(to right, #0387ff, #2b6ae2, #394dc3, #3f2fa3, #400783);  
    width: 40% ; 
    height: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;
    border-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    font-family: ${pr => pr.theme.font.family.primary};

    .status-section {
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 3px solid #000000;
    }

    .status-text {
        width: auto;
        margin: 0px 5px;
        font-size: ${pr => pr.theme.font.size.medium};
        color: ${pr => pr.theme.font.colors.priary};
    }

    .stream-viewers {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .stream-icon {
        color: #ffdb11;
        font-size: 20px;
    }

    .title-text {
        color: #ffdb11;
        font-size: ${pr => pr.theme.font.size.medium};
    }

    .game-text {
        color: #ffdb11;
        font-size: ${pr => pr.theme.font.size.medium};
    }

    .viewers-text {
        color: #ffdb11;
        font-size: ${pr => pr.theme.font.size.medium};
    }

    .stream-title {
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 5px;
    }

    

`