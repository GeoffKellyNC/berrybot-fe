import React, { useEffect, useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';
import * as twitchActions from '../store/twitch/twitch.actions'
import * as authActions from '../store/auth/auth.actions'
import * as musicActions from '../store/music/music.actions'
import * as userActions from '../store/user/user.actions'
import * as authTypes from '../store/auth/auth.types'
import * as notifyTypes from '../store/notify/notify.types'
import styled from 'styled-components'

// Imported Components
import AiSettings from '../components/controlPanel/aiSettings/AiSettings';
import AppNotifications from '../components/notifications/AppNotifications';
import ControlNav from '../components/controlPanel/ControlNav'
import ErrorNotify from '../components/notifications/ErrorNotify';
import GPTChat from '../components/gptChat/GptChat'
import Music from '../components/music/Music';
import QuickActions from '../components/controlPanel/quickActions/QuickActions';
import StatusBar from '../components/controlPanel/statusBar/StatusBar';
import TwitchChatSettings from '../components/controlPanel/twitchChatSettings/TwitchChatSettings';

const ControlPanel = ({
    isAuthenticated,
    isVerifying,
    getCurrentStreamData,
    userData,
    verifyUserTwitchAccessToken,
    getTwitchChatSettings,
    getMusicData,
    getScheduledMessages,
    getCustomCommands,
    getTwitchChatLogs,
  }) => {
    const dispatch = useDispatch()
  
    const welcomeNotify = () => {
      const hasWelcomed = localStorage.getItem('hasWelcomed')
  
      if (!hasWelcomed) {
        dispatch({
          type: notifyTypes.SET_APP_NOTIFICATION,
          payload: `Welcome to the Control Panel, ${userData.twitch_login.toUpperCase()}!\n
            Please Remember we are in BETA, so if you find any bugs, please report them to us on our Discord Server!`
        })
  
        setTimeout(() => {
          dispatch({
            type: notifyTypes.CLEAR_APP_NOTIFICATION
          })
        }, 5000)
  
        localStorage.setItem('hasWelcomed', true)
      }
    }
  
    const handleVerify = useCallback(async () => {
      dispatch({
        type: authTypes.SET_IS_VERIFYING,
        payload: true
      })
  
      await verifyUserTwitchAccessToken()
      await getCurrentStreamData()
      await getTwitchChatSettings()
      await getMusicData()
      await getScheduledMessages()
      await getCustomCommands()
      await getTwitchChatLogs()
      dispatch({
        type: authTypes.SET_USER_LEVEL,
        payload: userData.account_type
      })
      welcomeNotify()
  
      dispatch({
        type: authTypes.SET_IS_VERIFYING,
        payload: false
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      dispatch,
      getCurrentStreamData,
      getTwitchChatSettings,
      verifyUserTwitchAccessToken
    ])
  
    useEffect(() => {
      handleVerify()
    }, [handleVerify])
  
    return (
      <Cpanel>
        {isVerifying ? (
          <h1>Getting Data...</h1>
        ) : (
          <>
            <AppNotifications />
            <ErrorNotify />
            <ControlNav />
            <StatusBar />
            <ControlPanelBody>
              <div className="col">
                <QuickActions />
                <TwitchChatSettings />
                <AiSettings />
              </div>
              <div className="col col2">
                <GPTChat />
              </div>
              <div className="col">
                <Music />
              </div>
            </ControlPanelBody>
          </>
        )}
      </Cpanel>
    )
  }

export default connect(
  (st) => ({
    userData: st.userData,
    isAuthenticated: st.isAuthenticated,
    isVerifying: st.isVerifying,
  }),
  {
    verifyUserTwitchAccessToken: authActions.verifyUserTwitchAccessToken,
    getCurrentStreamData: twitchActions.getCurrentStreamData,
    getTwitchChatSettings: twitchActions.getTwitchChatSettings,
    getMusicData: musicActions.getMusicData,
    getScheduledMessages: userActions.getScheduledMessages,
    getCustomCommands: userActions.getCustomCommands,
    getTwitchChatLogs: twitchActions.getTwitchChatLogs
  }
)(ControlPanel)

const Cpanel = styled.div`
  width: 100%;
  background: ${(pr) => pr.theme.colors.black};
  height: 100vh;
  color: white;
`

const ControlPanelBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
    .col2 {
        width: 700px;
    }
`

