import React, { useEffect, useCallback, useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import * as twitchActions from '../store/twitch/twitch.actions'
import * as authActions from '../store/auth/auth.actions'
import * as authTypes from '../store/auth/auth.types'
import styled from 'styled-components'


// Imported Components
import ControlNav  from '../components/controlPanel/ControlNav'


const ControlPanel = ({
    isAuthenticated,
    isVerifying,
    getCurrentStreamData,
    userData,
    verifyUserTwitchAccessToken
}) => {

    const dispatch = useDispatch()

    const handleVerify = useCallback(async () => {
        dispatch({
            type: authTypes.SET_IS_VERIFYING,
            payload: true
        })

        await verifyUserTwitchAccessToken()
        await getCurrentStreamData()

        dispatch({
            type: authTypes.SET_IS_VERIFYING,
            payload: false
        })
    }, [dispatch, getCurrentStreamData, verifyUserTwitchAccessToken])

    useEffect(() => {
        handleVerify()
    }, [handleVerify])


    return(
        <Cpanel>
            {
                isVerifying ? <h1>Getting Data...</h1> 
                : (
                    <>
                        <ControlNav />
                        <div className = 'control-panel-body'>
                            <h1>Control Panel</h1>
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
    isVerifying: st.isVerifying
}),{
    verifyUserTwitchAccessToken: authActions.verifyUserTwitchAccessToken,
    getCurrentStreamData: twitchActions.getCurrentStreamData
}) (ControlPanel)


const Cpanel = styled.div`
    width: 100%;
    background: ${pr => pr.theme.colors.dashboard_background};
    height: 100vh;
    color: white;
    

`