import React from 'react'
import styled from 'styled-components'
import berryImg from '../../assets/images/berry.png'

const Song = ({
    songData,
    setCurrentSong,
    onCancel
}) => {
    const handleSetSong = async () => {
        await setCurrentSong(songData.song_url, songData.song_name)
        onCancel()
    }
  return (
    <StyledSong>
        <div className='song-header'>
            <img src={berryImg} alt="berry" className='song-img'/>
            <span>{songData.song_name} - </span>
            <span className = 'artists'>{songData.song_artist}</span>
        </div>
        <button
            onClick={handleSetSong}
        > Set Song </button>
    </StyledSong>
  )
}

export default Song


const StyledSong = styled.div`
    width: 300px;
    height: 100px;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 10px;
    background-color: ${pr => pr.theme.colors.primary};
    color: ${pr => pr.theme.font.colors.primary};

    .song-header {
        display: flex;
        align-items: center;
        gap: 1rem;
    }


    .song-img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 1rem;
    }


`