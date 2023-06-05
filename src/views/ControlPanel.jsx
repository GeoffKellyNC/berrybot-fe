import React, { useEffect, useCallback, useState} from 'react';
import { connect } from 'react-redux';
import * as authActions from '../store/auth/auth.actions'


const ControlPanel = ({
    isAuthenticated,
    isVerifying,
    userData,
    verifyUserAccessToken
}) => {


    const handleVerify = useCallback(async () => {
        await verifyUserAccessToken()
    }, [verifyUserAccessToken])

    useEffect(() => {
        handleVerify()
    }, [handleVerify])




    return(
        <div>
            {
                isVerifying ? <h1>Verifying...</h1> 
                : (
                    <h1> Welcome {userData.twitch_display} </h1>
                )
            }
        </div>
    )
}

export default connect(st => ({
    userData: st.userData,
    isAuthenticated: st.isAuthenticated,
    isVerifying: st.isVerifying
}),{
    verifyUserAccessToken: authActions.verifyUserAccessToken
}) (ControlPanel)