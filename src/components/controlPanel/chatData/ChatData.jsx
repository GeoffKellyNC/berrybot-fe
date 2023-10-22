import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import ViewChatters  from '../../controlPanel/chatData/ViewChatters'


const ChatData = ({
    chatDataRef,
    twitchMods,
    chatCount

}) => {
  return (
    <ChatDataSection ref = {chatDataRef}>
        <div className='chat-data-header'>
            <h1>Chat Data</h1>
        </div>
        <div className='chat-data-body'>
            <div className = 'chat-count chat-data-section'>
                <span className = 'chat-title'> People in chat: </span>
                <span className = 'data-value'>{ chatCount }</span>
            </div>
            <div className = 'chat-data-section mod-count'>
                <span className = 'chat-title'>Moderator Count: </span>
                <span className = 'data-value'>{ twitchMods ? twitchMods.length : 'No mods' }</span>
            </div>
        </div>
        <div className = 'chat-action-body'>
            <ViewChatters />

        </div>
    </ChatDataSection>
  )
}

export default connect(st => ({
    userData: st.userData,
    chatMods: st.chatMods,
    twitchMods: st.twitchMods,
    twitchChatters: st.twitchChatters,
    chatCount: st.twitchChatterCount
}),{

}) (ChatData)



const ChatDataSection = styled.div`
    width: 100%;
    height: 325px;
    border: 1px solid ${pr => pr.theme.colors.primary};
    border-radius: 5px;

    .chat-data-header {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2%;
        font-family: ${pr => pr.theme.font.family.primary};
        font-size: ${pr => pr.theme.font.size.xxl};
        color: ${pr => pr.theme.colors.berry};
    }

    .chat-data-body {
        width: 100%;
      
    }




`