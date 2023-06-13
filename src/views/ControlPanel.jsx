import React, { useEffect, useCallback, useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import * as twitchActions from '../store/twitch/twitch.actions'
import * as authActions from '../store/auth/auth.actions'
import * as authTypes from '../store/auth/auth.types'
import * as notifyTypes from '../store/notify/notify.types'
import styled from 'styled-components'


// Imported Components
import ControlNav  from '../components/controlPanel/ControlNav'
import StatusBar from '../components/controlPanel/statusBar/StatusBar';
import QuickActions from '../components/controlPanel/quickActions/QuickActions';
import ErrorNotify from '../components/notifications/ErrorNotify';
import AppNotifications from '../components/notifications/AppNotifications';


const ControlPanel = ({
    isAuthenticated,
    isVerifying,
    getCurrentStreamData,
    userData,
    verifyUserTwitchAccessToken,
    getTwitchChatSettings
}) => {

    const dispatch = useDispatch()

    const welcomeNotify = () => {
        const hasWelcomed = localStorage.getItem('hasWelcomed')

        if(!hasWelcomed){
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
        welcomeNotify()

        dispatch({
            type: authTypes.SET_IS_VERIFYING,
            payload: false
        })
    }, [dispatch, getCurrentStreamData, getTwitchChatSettings, verifyUserTwitchAccessToken])

    useEffect(() => {
        handleVerify()
    }, [handleVerify])


    return(
        <Cpanel>
            {
                isVerifying ? <h1>Getting Data...</h1> 
                : (
                    <>
                        <AppNotifications />
                        <ErrorNotify />
                        <ControlNav />
                        <StatusBar />
                        <div className = 'control-panel-body'>
                            <QuickActions />

                        </div>
                    </>
                )

            }
        </Cpanel>
    )
}

export default connect(st => ({
    userData: st.userData,
    isAuthenticated: st.isAuthenticated,
    isVerifying: st.isVerifying,
    
}),{
    verifyUserTwitchAccessToken: authActions.verifyUserTwitchAccessToken,
    getCurrentStreamData: twitchActions.getCurrentStreamData,
    getTwitchChatSettings: twitchActions.getTwitchChatSettings
}) (ControlPanel)


const Cpanel = styled.div`
    width: 100%;
    background: ${pr => pr.theme.colors.black};
    height: 100vh;
    color: white;

    .control-panel-body {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    

`