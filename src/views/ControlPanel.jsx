import React, { useEffect, useCallback, useState} from 'react';
import { connect } from 'react-redux';
import * as authActions from '../store/auth/auth.actions'


const ControlPanel = ({
    isAuthenticated,
    userData,
    verifyUserAccessToken
}) => {

    const [isVerifing, setIsVerifing] = useState(false)

    const handleVerify = useCallback(async () => {
        setIsVerifing(true)
        await verifyUserAccessToken()
        if(isAuthenticated){
            setIsVerifing(false)
        }else{
            console.log('error verifying user')
        }
        
    }, [isAuthenticated, verifyUserAccessToken])

    useEffect(() => {
        handleVerify()
    }, [handleVerify])




    return(
        <div>
            {
                isVerifing ? <h1>Verifying...</h1> 
                : (
                    <h1> Welcome {userData.twitch_display} </h1>
                )
            }
        </div>
    )
}

export default connect(st => ({
    userData: st.userData,
    isAuthenticated: st.isAuthenticated
}),{
    verifyUserAccessToken: authActions.verifyUserAccessToken
}) (ControlPanel)