import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'antd'

const LogsButton = () => {
  return (
    <Button
        className='nav-to-logs'
        type='primary'
        ghost
        style={{
            width: 'auto',
            height: '50px',
            fontSize: '15px',
            color: 'yellow'
        }}
    >
        <NavLink to='/chat-logs'>Chat Log</NavLink>
    </Button>

  )
}

export default LogsButton