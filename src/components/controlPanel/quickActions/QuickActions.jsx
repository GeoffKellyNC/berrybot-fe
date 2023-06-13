import React from 'react'
import styled from 'styled-components'

import RunAd from './RunAd'
import StartPoll from './StartPoll'
import CreateClip from './CreateClip'




const QuickActions = () => {

    
    return (
        <Qa>
            <RunAd />
            <StartPoll />
            <CreateClip />
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
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    


`