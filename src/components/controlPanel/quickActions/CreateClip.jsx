import React from 'react'
import { connect } from 'react-redux'
import { Button, Tooltip } from 'antd'
import * as twitchActions from '../../../store/twitch/twitch.actions'

const CreateClip = ({
    createTwitchClip
}) => {

    const handleCreateClip = async () => {
        await createTwitchClip()
    }

  return (
    <>
        <Tooltip title='Creates a clip and saves to twitch.' color={'volcano'}>
            <Button
                className='create-clip-btn'
                type='primary'
                ghost
                style={{
                    width: 'auto',
                    height: '50px',
                    fontSize: '15px',
                    color: 'yellow'
                }}
                onClick={handleCreateClip}
            >
                Create Clip
            </Button>
        </Tooltip>
    </>
  )
}

export default connect(st => ({

}),{
    createTwitchClip: twitchActions.createTwitchClip
}) (CreateClip)