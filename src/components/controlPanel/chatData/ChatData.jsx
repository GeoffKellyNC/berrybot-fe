import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'


//! USE ANTD DRAWER COMPONENT FOR THIS SECTION
//! USE ANTD DRAWER COMPONENT FOR THIS SECTION
//! USE ANTD DRAWER COMPONENT FOR THIS SECTIO
//! USE ANTD DRAWER COMPONENT FOR THIS SECTIO
//! USE ANTD DRAWER COMPONENT FOR THIS SECTIO
//! USE ANTD DRAWER COMPONENT FOR THIS SECTIO
//! USE ANTD DRAWER COMPONENT FOR THIS SECTIO
//! USE ANTD DRAWER COMPONENT FOR THIS SECTIO
//! USE ANTD DRAWER COMPONENT FOR THIS SECTIO
//! USE ANTD DRAWER COMPONENT FOR THIS SECTIO
//! USE ANTD DRAWER COMPONENT FOR THIS SECTIO

const ChatData = ({
    userData,
    chatMods,
    chatDataRef
}) => {
  return (
    <ChatDataSection ref = {chatDataRef}>
        <div className='chat-data-header'>
            <h1>Chat Data</h1>
        </div>
        <div className='chat-data-body'>
            <span> COMING SOON! </span>
        </div>
    </ChatDataSection>
  )
}

export default connect(st => ({
    userData: st.userData,
    chatMods: st.chatMods,
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
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: ${pr => pr.theme.font.family.primary};
        font-size: ${pr => pr.theme.font.size.xxl};
        color: ${pr => pr.theme.colors.berry};
    }




`