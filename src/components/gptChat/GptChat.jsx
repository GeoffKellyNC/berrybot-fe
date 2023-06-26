import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import webChatApi from '../../util/api/webChatApi'

import { Input, Button } from 'antd';

const GPTChat = ({ userData }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current && messageSent) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messageSent, messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    setMessageSent(true);
    if (input.trim() === '') return;

    const userMessage = input;
    setInput('');
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userMessage, sender: 'user', name: userData.twitch_login },
    ]);

    setIsThinking(true);

    const reply = await webChatApi(userData.twitch_login, userMessage);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: reply, sender: 'gpt', name: 'Berry' },
    ]);

    setIsThinking(false);
  };

  return (
    <ChatBox>
        <div className = 'webchat-title'>
            <span className = 'title-text'> AI Analytics Chat </span>
        </div>
        <div className = 'chat-body'>
            {messages.map((message, index) => (
                <div key={index}>
                    <div>
                        {
                           <span className='message-name'>
                            {message.sender === 'user' ? `${userData.twitch_login}:`: 'Berry :'}
                           </span> 
                        }
                    </div>
                    <Message sender={message.sender}>
                        <div className = 'message-text'> {message.text} </div>
                    </Message>
                </div>
            ))}
        </div>
        <div className = 'chat-input'>
            <Input
                placeholder="Ask about your chat... What has my chat been talking about?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onPressEnter={sendMessage}
            />
            <Button
                type="primary"
                onClick={sendMessage}
                disabled={isThinking}
            >
                Send
            </Button>
        </div>
        {
            isThinking && (
                <Thinking>
                    <span className = 'thinking-text'> Thinking... </span>
                </Thinking>
            )
        }
    </ChatBox>
  );
};

export default connect(
    (st) => ({
      userData: st.userData,
    }),
    {}
  )(GPTChat);

  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const ChatBox = styled.div`
  
    min-width: 30rem;
    height: 350px;
    background-color: ${pr => pr.theme.colors.dashboard_background};
    border-radius: 10px;
    border: 1px solid ${pr => pr.theme.colors.primary};
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);

    .webchat-title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        padding: 10px;
        background-color: ${pr => pr.theme.colors.dashboard_background};

        .title-text {
            font-size: 20px;
            font-weight: bold;
            color: ${pr => pr.theme.colors.primary};
            font-family: ${pr => pr.theme.font.family.secondary};
        }
    }

    .chat-body {
        flex: 1;
        overflow-y: auto;
        background-color: ${pr => pr.theme.colors.dashboard_background};
        height: 300px;
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 10px;

        .message {
            margin-bottom: 10px;

            &.user {
                text-align: right;
                color: ${pr => pr.theme.colors.primary};
            }

            &.gpt {
                text-align: left;
                color: ${pr => pr.theme.colors.secondary};
            }

            .message-text {
                word-wrap: break-word;
            }
        }
    }

    .chat-input {
        display: flex;
        justify-content: space-between;

        .ant-input {
            flex: 1;
            margin-right: 10px;
        }

        .ant-btn {
            width: 100px;
        }
    }

    .message-name {
        font-weight: bold;
        transform: uppercase;
        font-family: ${pr => pr.theme.font.family.secondary};
        color: ${pr => pr.theme.colors.green};
        font-size: ${pr => pr.theme.font.size.large};
        text-transform: uppercase;
    }
`;

const Message = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  color: ${({ sender }) => (sender === 'user' ? (p) => p.theme.colors.berry : (p) => p.theme.colors.black)};
  font-family: ${pr => pr.theme.font.family.secondary};
  animation: ${fadeIn} 0.3s ease-in-out;
  background: ${({ sender }) =>
    sender === 'user'
      ? 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
      : 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'};
  text-align: ${({ sender }) => (sender === 'user' ? 'left' : 'left')};

  .message-text {
    word-wrap: break-word;
  }


`;

const Thinking = styled.div`
  animation: ${pulse} 1s linear infinite;
  color: ${pr => pr.theme.colors.berry};
};
`;








