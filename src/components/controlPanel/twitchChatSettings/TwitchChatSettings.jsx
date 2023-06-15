import React, { useState } from 'react'
import styled from 'styled-components'
import { connect, useDispatch } from 'react-redux'
import * as notifyTypes from '../../../store/notify/notify.types'
import * as twitchTypes from '../../../store/twitch/twitch.types'
import * as twitchActions from '../../../store/twitch/twitch.actions'
import { Switch, Button } from 'antd'

const TwitchChatSettings = ({
    tcs,
    updateTwitchChatSetting
}) => {
    const [disabled, setDisabled] = useState(false)
    const dispatch = useDispatch()

const handleSwitch = async (e, modifier) => {
    const oldState = tcs
    const newState = {
        ...oldState,
        [modifier]: e
    }
    dispatch({
        type: twitchTypes.UPDATE_TWITCH_CHAT_SETTINGS,
        payload: newState
    })

    await updateTwitchChatSetting(modifier, e)

    dispatch({
        type: notifyTypes.SET_APP_NOTIFICATION,
        payload: `Twitch Chat Settings Updated: ${modifier} ${e ? 'Enabled' : 'Disabled'}`
    })

    setTimeout(() => {
        dispatch({
            type: notifyTypes.CLEAR_APP_NOTIFICATION
        })
    }
    , 5000)
    
}

    const handleDisable = () => {
        setDisabled(!disabled)
    }

  return (
    <TwitchChatSettingsWrapper>
       { !tcs ? <p>Loading...</p> : 
        <>
            <div className='tcs-title'>
                <h3>Twitch Chat Settings</h3>
                <Button
                    type='primary'
                    ghost
                    onClick={handleDisable}
                    className='tcs-title__button'
                > 
                    {disabled ? 'Unlock' : 'Lock'}
                </Button>
            </div>
            <div className = 'tcs-container'>
                <div className='tcs-container__item'>
                    <h4 className='tcs-container__item__title'>Slow Mode: </h4>
                    <Switch
                        checked={tcs.slow_mode}
                        onChange={(e) => handleSwitch(e, 'slow_mode')}
                        disabled={disabled}
                    />
                </div>
                <div className='tcs-container__item'>
                    <h4 className='tcs-container__item__title'>Follower Mode: </h4>
                    <Switch
                        checked={tcs.follower_mode}
                        onChange={(e) => handleSwitch(e, 'follower_mode')}
                        disabled={disabled}
                    />
                </div>
                <div className='tcs-container__item'>
                    <h4 className='tcs-container__item__title'>Sub Mode: </h4>
                    <Switch
                        checked={tcs.subscriber_mode}
                        onChange={(e) => handleSwitch(e, 'subscriber_mode')}
                        disabled={disabled}
                    />
                </div>
                <div className='tcs-container__item'>
                    <h4 className='tcs-container__item__title'>Emote Mode: </h4>
                    <Switch
                        checked={tcs.emote_mode}
                        onChange={(e) => handleSwitch(e, 'emote_mode')}
                        disabled={disabled}
                    />
                </div>
                <div className='tcs-container__item'>
                    <h4 className='tcs-container__item__title'>Unique Chat: </h4>
                    <Switch
                        checked={tcs.unique_chat_mode}
                        onChange={(e) => handleSwitch(e, 'unique_chat_mode')}
                        disabled={disabled}
                    />
                </div>
            </div>
        </>
        }
    </TwitchChatSettingsWrapper>
  )
}

export default connect(st => ({
    tcs: st.twitchChatSettings
}),{
    updateTwitchChatSetting: twitchActions.updateTwitchChatSetting
}) (TwitchChatSettings)


const TwitchChatSettingsWrapper = styled.div`
    width: 400px;
    height: auto;
    background-color: ${pr => pr.theme.colors.dashboard_background};
    border-radius: 10px;
    border: 0.1px solid ${pr => pr.theme.colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);

    .tcs-title {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        font-family: ${pr => pr.theme.font.family.primary};
        color: #13E431;

    }

    .tcs-container {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        gap: 10px;
    }

    .tcs-container__item {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .tcs-container__item__title {
        font-size: 1.2rem;
        font-weight: 500;
        color: ${pr => pr.theme.colors.primary};
        font-family: ${pr => pr.theme.font.family.secondary};
        
    }

    .tcs-title__button {
        margin-left: 10px;
        height: 30px;
    }




`