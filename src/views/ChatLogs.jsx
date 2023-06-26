import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as twitchActions from '../store/twitch/twitch.actions'
import styled from 'styled-components';

import Log from '../components/chatLogs/Log';
import NavLogs from '../components/chatLogs/NavLogs';

const ChatLogs = ({
    userData,
    twitchChatLog,
    getTwitchChatLogs
  }) => {
    const [searchText, setSearchText] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const [flaggedOnly, setFlaggedOnly] = useState(false);
  
    useEffect(() => {
      getTwitchChatLogs()
    }, [getTwitchChatLogs])
  
    const handleSearchTextChange = (e) => {
      setSearchText(e.target.value);
    }
  
    const handleSearchDateChange = (e) => {
      setSearchDate(e.target.value);
    }
  
    const handleFlaggedOnlyChange = (e) => {
      setFlaggedOnly(e.target.checked);
    }
  
    const filteredLogs = twitchChatLog.filter((log) => {
      const searchTextMatch = log.message.toLowerCase().includes(searchText.toLowerCase()) || log.chatter_name.toLowerCase().includes(searchText.toLowerCase());
      const searchDateMatch = !searchDate || log.timestamp.slice(0, 10) === searchDate;
      const isFlagged = log.flagged;
      return (searchTextMatch && searchDateMatch && (!flaggedOnly || isFlagged === flaggedOnly));
    }).reverse();
  
    return (
        <>
        <NavLogs />
        <ChatLogsContainer>
            <ChatLogsTitle>Chat Logs</ChatLogsTitle>
            <SearchContainer>
            <SearchInput
                type="text"
                placeholder="Search by text or user"
                value={searchText}
                onChange={handleSearchTextChange}
            />
            <SearchInput
                type="date"
                placeholder="Search by date"
                value={searchDate}
                onChange={handleSearchDateChange}
            />
            <FlaggedOnlyInput
                type="checkbox"
                checked={flaggedOnly}
                onChange={handleFlaggedOnlyChange}
            />
            <FlaggedOnlyLabel>Flagged Only</FlaggedOnlyLabel>
            <span className = 'totalLogs'>
                Total Logs: <span>{filteredLogs.length}</span>
            </span>
            </SearchContainer>
            <ChatLogsContent>
            {filteredLogs.length > 0 ? (
                filteredLogs.map((log, idx) => <Log key={idx} item={log} />)
            ) : (
                <NoLogsText>NO LOGS</NoLogsText>
            )}
        </ChatLogsContent>
      </ChatLogsContainer>
        </>
    );
  };
  
  
  
const ChatLogsContainer = styled.div`
  background-color: #282c34;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
`;

const ChatLogsTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  font-family: ${p => p.theme.font.family.secondary};
`;

const ChatLogsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoLogsText = styled.p`
  font-size: 24px;
  margin: 20px 0;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  .totalLogs {
    margin-left: 20px;
    font-family: ${p => p.theme.font.family.primary};
  }
`;

const SearchInput = styled.input`
  padding: 8px;
  font-size: 16px;
  margin-right: 10px;
  border-radius: 4px;
  border: none;
  background-color: rgba(0,0,0,0.4);
  color: white;

    &::placeholder {
        color: rgba(255,255,255,0.5);
    }
`;

const FlaggedOnlyInput = styled.input`
  margin-right: 10px;

`;

const FlaggedOnlyLabel = styled.label`
    font-family: ${p => p.theme.font.family.primary};
    font-size: 16px;
`;

export default connect(
    (state) => ({
      userData: state.userData,
      twitchChatLog: state.twitchChatLog
    }),
    {
      getTwitchChatLogs: twitchActions.getTwitchChatLogs
    }
  )(ChatLogs);











