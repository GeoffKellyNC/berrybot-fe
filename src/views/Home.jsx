import React from 'react'
import twitchLoginLink from '../util/twitchLoginLink';

// ANT D COMPONENT IMPORTS
import { Button } from 'antd';





const HomePage = () => {

    const handleLoginClick = (e) => {
        e.preventDefault()
        window.location.href = twitchLoginLink
    }
    return(
        <div>
            <h1> Home Page </h1>
            <Button 
            type="primary"
            onClick = {handleLoginClick}> Login </Button>
        </div>
    )
}


export default HomePage;