import React from 'react'
import styled from 'styled-components'

import RunAd from './RunAd'
import StartPoll from './StartPoll'
import CreateClip from './CreateClip'
import ScheduledActions from './ScheduledActions'
import CustomCommands from './CustomCommands'




const QuickActions = () => {

    
    return (
        <Qa>
            <div className="quick-actions-title">
                <h3>Quick Actions</h3>
            </div>
            <RunAd />
            <StartPoll />
            <CreateClip />
            <ScheduledActions />
            <CustomCommands />
        </Qa>
    )
}

export default QuickActions


const Qa = styled.div`
    width: 400px;
    height: auto;
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

    .quick-actions-title {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        font-family: ${pr => pr.theme.font.family.primary};
        background-image: linear-gradient(to right, #a603ff, #d900c9, #ee0097, #ef006c, #e4004b);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }



`