import React from 'react'
import styled from 'styled-components'

import { RiDeleteBin6Line } from 'react-icons/ri';

const ScheduledTask = ({task, deleteScheduledCommand}) => {
  return (
    <TaskStyled>
      <span className = 'task-name'> {task.scheduleName} </span>
      <span className = 'task-message'> {task.scheduleMessage} </span>
      <span className = 'task-time'> {task.timer} min </span>
      <RiDeleteBin6Line 
        size = {'1.5rem'} 
        onClick = {() => deleteScheduledCommand(task.sid)}
        className = 'delete-btn'/>
    </TaskStyled>
  )
}

export default ScheduledTask


const TaskStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${p => p.theme.colors.primary};

  .task-name {
    font-size: ${p => p.theme.font.size.medium};
    font-weight: bold;
    color: ${p => p.theme.font.colors.secondary};
  }

  .task-message {
    font-size: ${p => p.theme.font.size.small};
    color: ${p => p.theme.colors.berry};
  }

  .task-time {
    font-size: ${p => p.theme.font.size.medium};
    font-weight: bold;
    color: ${p => p.theme.colors.primary};
  }

    .delete-btn {
    color: ${p => p.theme.colors.berry};
    cursor: pointer;
    }
    
`;