import React from 'react'
import styled from 'styled-components'

import RunAd from './RunAd'
import StartPoll from './StartPoll'




const QuickActions = () => {

    
    return (
        <Qa>
            <RunAd />
            <StartPoll />
        </Qa>
    )
}

export default QuickActions


const Qa = styled.div`
    width: 450px;
    height: 275px;
    background-color: ${pr => pr.theme.colors.dashboard_background};
    border-radius: 10px;
    border: 0.1px solid ${pr => pr.theme.colors.primary};


`