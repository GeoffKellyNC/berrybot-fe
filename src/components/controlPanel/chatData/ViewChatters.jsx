import React, { useState } from 'react'
import { Button, Drawer } from 'antd'
import { connect } from 'react-redux'


const ViewChatters = ({
    twitchChatters
}) => {
    const [open, setOpen] = useState(false)


    const onClose = () => {
        setOpen(false)
    }
  return (
    <div className = 'chat-action view-chatters'>
        <Button
            type='primary'
            ghost
            size='middle'
            onClick={() => setOpen(!open)}
        > View Chatters </Button>
        <Drawer
            title = 'Current Twitch Chatters'
            placement='right'
            onClose={onClose}
            open = {open}
            size = 'large'
        >
            {   twitchChatters &&
                twitchChatters.map((user, idx) => {
                    return(
                        <div>
                            <span> { user.user_name } </span>
                        </div>
                    )
                })
            }
        </Drawer>
    </div>
  )
}

export default connect(st => ({
    twitchChatters: st.twitchChatters
}),{}) (ViewChatters)