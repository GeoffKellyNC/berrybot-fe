import React, { useState } from 'react'
import styled from 'styled-components'

import RunAd from './RunAd'
import StartPoll from './StartPoll'
import CreateClip from './CreateClip'
import ScheduledActions from './ScheduledActions'
import CustomCommands from './CustomCommands'
import LogsButton from './LogsButton'
import { Modal } from 'antd'

import { TbHelpTriangleFilled } from 'react-icons/tb'



const QuickActions = () => {
    const [openHelp, setOpenHelp] = useState(false)



    const handleHelp = () => {
        setOpenHelp(!openHelp)
    }
    
    return (
        <Qa>
            <div className="quick-actions-title">
                <h3>Quick Actions</h3>
                <TbHelpTriangleFilled 
                    size={20}
                    color = 'orange'
                    style={{
                        marginLeft: '10px',
                        cursor: 'pointer'
                    }}
                    onClick = {handleHelp}
                    className = 'help-icon'
                    bodyStyle = {{
                        "display": "flex",
                        "justifyContent": "center",
                        "alignItems": "center",
                        "flexDirection": "column"
                    }}
                />
            </div>
            <RunAd />
            <StartPoll />
            <CreateClip />
            <ScheduledActions />
            <CustomCommands />
            <LogsButton />
            <StyledModal
                title = 'Quick Actions HELP'
                open = {openHelp}
                onCancel = {handleHelp}
                footer = {null}
                width = {'1000px'}
            >
                <div className="help-content">
                    <div className = 'run-ad-help help-secoin'>
                        <h3>Run Ad</h3>
                        <p> Run an ad for a specified amount of time </p>
                        <p> Must be affiliate or partner to use feature </p>
                    </div>
                    <div className = 'start-poll-help help-secion'>
                        <h3>Start Poll</h3>
                        <p> Start a poll for your viewers to vote on </p>
                        <p> Poll Must have all fields filled out </p>
                    </div>
                    <div className = 'create-clip-help help-section'>
                        <h3>Create Clip</h3>
                        <p> Create a clip of the current stream </p>
                        <p> Clip will be saved to your twitch channel </p>
                    </div>
                    <div className = 'scheduled-actions-help help-section'>
                        <h3>Scheduled Actions</h3>
                        <p> Schedule an action to happen at a specified time </p>
                        <p> This will run a message automatically in chat.</p>
                        <p> Time is in seconds </p>
                    </div>
                    <div className = 'custom-commands-help help-section'>
                        <h3>Custom Commands</h3>
                        <p> Create a custom command for your chat </p>
                        <p>Prompt: this is the command a chatter enters in chat</p>
                        <p> Aciton: This is what the bot will say in response. </p>
                    </div>
                </div>
            </StyledModal>
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

const StyledModal = styled(Modal)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: ${pr => pr.theme.font.family.primary};

    .help-section {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 10px;
        font-family: ${pr => pr.theme.font.family.primary};
    }

    h3 {
        font-size: ${pr => pr.theme.font.size.xl};
        font-family: ${pr => pr.theme.font.family.primary};
        margin-bottom: 5px;
    }

    p {
        font-size: ${pr => pr.theme.font.size.sm};
        font-family: ${pr => pr.theme.font.family.primary};
        margin-bottom: 5px;
    }

    .help-content {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 10px;
        font-family: ${pr => pr.theme.font.family.primary};
    }




`