import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import * as twitchActions from '../../../store/twitch/twitch.actions'

const CreateClip = ({
    createTwitchClip
}) => {

    const handleCreateClip = async () => {
        await createTwitchClip()
    }

  return (
    <>
        <Button
            className='create-clip-btn'
            type='primary'
            ghost
            style={{
                width: '100px',
                height: '30px',
                fontSize: '12px',
            }}
            onClick={handleCreateClip}
        >
            Create Clip
        </Button>
    </>
  )
}

export default connect(st => ({

}),{
    createTwitchClip: twitchActions.createTwitchClip
}) (CreateClip)