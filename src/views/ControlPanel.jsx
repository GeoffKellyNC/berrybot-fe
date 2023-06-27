import React, { useEffect, useCallback, useState, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components'
import { Tour, Button } from 'antd';

// Redux Imports
import * as twitchActions from '../store/twitch/twitch.actions'
import * as authActions from '../store/auth/auth.actions'
import * as musicActions from '../store/music/music.actions'
import * as userActions from '../store/user/user.actions'
import * as authTypes from '../store/auth/auth.types'
import * as notifyTypes from '../store/notify/notify.types'

// Imported Components
import AiSettings from '../components/controlPanel/aiSettings/AiSettings';
import AppNotifications from '../components/notifications/AppNotifications';
import ChatData from '../components/controlPanel/chatData/ChatData';
import ControlNav from '../components/controlPanel/ControlNav'
import ErrorNotify from '../components/notifications/ErrorNotify';
import GPTChat from '../components/gptChat/GptChat'
import Music from '../components/music/Music';
import QuickActions from '../components/controlPanel/quickActions/QuickActions';
import StatusBar from '../components/controlPanel/statusBar/StatusBar';
import TwitchChatSettings from '../components/controlPanel/twitchChatSettings/TwitchChatSettings';

//Imported Animations
import Bot2 from '../components/animations/Bot2'

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
    getTwitchMods
  }) => {
    const [tourOpen, setTourOpen] = useState(false)

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
      await getTwitchMods()
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

    const quickActionRef = useRef(null)
    const chatSettingsRef = useRef(null)
    const aiSettingsRef = useRef(null)
    const gptChatRef = useRef(null)
    const chatDataRef = useRef(null)
    const musicRef = useRef(null)

    const tourData = [
      {
          title: 'This is the Quick Actions Panel',
          description: 'The Quick Actions Panel allows you to quickly perform actions on the bot. You can start the bot, stop the bot, and restart the bot from this panel.',
          target: () => quickActionRef.current,
          arrow: true,
          placement: 'top'
      },
      {
          title: 'This is the Twitch Chat Settings Panel',
          description: 'The Twitch Chat Settings Panel allows you to change the settings for the Twitch Chat.',
          target: () => chatSettingsRef.current,
          arrow: true,
          placement: 'top'
      },
      {
          title: 'This is the AI Settings Panel',
          description: 'The AI Settings Panel allows you to change the settings for the AI. You can adjust the settings to your liking. Remeber that higher percentages means the bot will be more linient, and lower percentages means the bot will be more strict.',
          target: () => aiSettingsRef.current,
          arrow: true,
          placement: 'top'
      },
      {
          title: 'This is the GPT Chat Panel',
          description: 'The GPT Chat Panel allows you to chat with the AI. You can also see the AI\'s response to your message. Here you can ask things like, What is my stream talking about? Who has been saying negative thigns in chat? What is my chats mood? and more!',
          target: () => gptChatRef.current,
          arrow: true,
          placement: 'top'
      },
      {
          title: 'This is the Chat Data Panel',
          description: 'The Chat Data Panel allows you to see the data from your chat. You can see the most used words, the most used emotes, the most used phrases, and more!',
          target: () => chatDataRef.current,
          arrow: true,
          placement: 'top'
      },
      {
          title: 'This is the Music Panel',
          description: 'The Music Panel allows you to play music in your stream. All music is Non Copywrite and exclusive to berrybot. More music will be added in the future.',
          target: () => musicRef.current,
          arrow: true,
          placement: 'top'
      }
  ];
  
    return (
      <Cpanel>
        {isVerifying ? (
          <h1>Getting Data...</h1>
        ) : (
          <>
            <AppNotifications />
            <ErrorNotify />
            <ControlNav setTourOpen = {setTourOpen} />
            <StatusBar />
            <ControlPanelBody>
              <div className="col">
                <QuickActions quickActionRef = {quickActionRef} />
                <TwitchChatSettings chatSettingsRef = {chatSettingsRef} />
                <AiSettings aiSettingsRef = {aiSettingsRef} />
              </div>
              <div className="col col2">
                <GPTChat gptChatRef = {gptChatRef} />
                <ChatData chatDataRef = {chatDataRef} />
              </div>
              <div className="col">
                <Music musicRef = {musicRef} />
                <Bot2 />
              </div>
            </ControlPanelBody>
          </>
        )}
        <Tour
          steps={tourData}
          open={tourOpen}
          onClose = {() => setTourOpen(false)}
        />
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
    getTwitchChatLogs: twitchActions.getTwitchChatLogs,
    getTwitchMods: twitchActions.getTwitchMods,
  }
)(ControlPanel)

const Cpanel = styled.div`
  width: 100%;
  height: 100%;
  background: ${(pr) => pr.theme.colors.black};
  color: white;
  overflow: hidden;
  
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

