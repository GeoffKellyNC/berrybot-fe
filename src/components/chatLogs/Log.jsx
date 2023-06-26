import React from 'react';
import styled from 'styled-components';

const LogItem = styled.div`
    width: 80%;
    margin: 1rem -1rem;
    background: ${props => props.flagged ? 'rgba( 253, 0, 0, 0.4 )' : 'rgba( 0, 0, 0, 0.4 )'};
    box-shadow: ${props => props.flagged ? '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )' : '0 8px 32px 0 rgba( 0, 0, 0, 0.37 )'};
    backdrop-filter: ${props => props.flagged ? 'blur( 6.5px )' : 'none'};
    -webkit-backdrop-filter: ${props => props.flagged ? 'blur( 6.5px )' : 'none'};
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 1rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  .item-contain {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
  }

  .item-title {
    font-weight: bold;
    margin-right: 0.5rem;
    color: #f7c331;
    font-family: ${p => p.theme.font.family.secondary};
  }

  .message {
    color: #8bd3ff;
    width: auto;
  }

  .item-text {
    font-family: ${p => p.theme.font.family.primary};

  }

  .timestamp {
    color: #ff8b8b;
  }
`;

const Log = ({ item }) => {
  return (
    <LogItem flagged={item.flagged}>
      <div className='chatter-name item-contain'>
        <span className='item-title'>USER:</span>
        <span className='item-text'>{item.chatter_name}</span>
      </div>
      <div className='message item-contain'>
        <span className='item-title'>MESSAGE:</span>
        <span className='item-text'>{item.message}</span>
      </div>
      <div className='flagged item-contain'>
        <span className='item-title'>FLAGGED:</span>
        <span className={`item-text`}>{item.flagged ? 'TRUE' : 'FALSE'}</span>
      </div>
      <div className = 'flagged-reason item-contain'>
        <span className='item-title'>FLAGGED REASON:</span>
        <span className='item-text'>{item.reason}</span>
      </div>
      <div className='confidence item-contain'>
        <span className='item-title'>CONFIDENCE:</span>
        <span className='item-text'>{item.confidence_raw}</span>
      </div>
      <div className='timestamp item-contain'>
        <span className='item-title'>TIMESTAMP:</span>
        <span className='item-text'>{item.timestamp}</span>
      </div>
    </LogItem>
  );
};


export default Log