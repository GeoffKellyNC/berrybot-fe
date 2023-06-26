import React from 'react'
import styled from 'styled-components'

import { RiDeleteBin6Line } from 'react-icons/ri';


const Command = ({
    com,
    handleDelete
}) => {
  return (
    <CommandStyled>
        <h3>{com.name}</h3>
        <p>{com.prompt}</p>
        <p>{com.action}</p>
        <RiDeleteBin6Line
            size = {'1.5rem'}
            onClick = {() => handleDelete(com.cid)}
            className = 'delete-btn'/>
    </CommandStyled>
  )
}

export default Command

const CommandStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 10px;
    border-bottom: 1px solid ${p => p.theme.colors.primary};

    h3 {
        font-size: ${p => p.theme.font.size.medium};
        font-weight: bold;
        color: ${p => p.theme.font.colors.secondary};
    }

    p {
        font-size: ${p => p.theme.font.size.large};
        color: ${p => p.theme.colors.berry};
    }

    .delete-btn {
        color: ${p => p.theme.colors.berry};
        cursor: pointer;
    }

`

