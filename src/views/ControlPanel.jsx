import React from 'react';
import { connect } from 'react-redux';


const ControlPanel = ({
    userData,
    isAuthenticated
}) => {
    return(
        <div>
            <h1> Welcome {userData.twitch_display} </h1>
            <span>
                Is Auth:
                {
                    isAuthenticated ? 'True' : 'False'
                }
            </span>
        </div>
    )
}

export default connect(st => ({
    userData: st.userData,
    isAuthenticated: st.isAuthenticated
}),{}) (ControlPanel);