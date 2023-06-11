import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Button, Modal, Select } from 'antd';

import * as twitchActions from '../../../store/twitch/twitch.actions'


const RunAd = ({
    userData,
    runTwitchAd
}) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [adLength, setAdLength] = useState('30')


    const showModal = () => {
        setOpen(true);
      };

      const runAd = async  () => {
            await runTwitchAd('30')
      }
    
      const handleOk = async  () => {
        setLoading(true);
        await runAd()
        setLoading(false);
        setOpen(false);
      };

      const handleCancel = () => {
        setOpen(false);
      };

      const handleChange = (e) => {
        setAdLength(e.value)
      }

  return (
    <>
        <Button
            className='run-ad-btn'
            type='primary'
            ghost
            style={{
                width: '100px',
                height: '30px',
                fontSize: '12px',
            }}
            onClick = {showModal}
        > Run Ad </Button>
        <Modal
            open={open}
            title="Select Ad Length"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                Return
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                Run Ad
                </Button>
            ]}
            >
                    <Select
                        defaultValue="30"
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={[
                            { value: '30', label: '30s' },
                            { value: '60', label: '60s' },
                            { value: '90', label: '90s' },
                            { value: '120', label: '120s' },
                        ]}
                    />
         </Modal>
    </>
  )
}

export default connect(st => ({
    userData: st.userData
}),{
    runTwitchAd: twitchActions.runTwitchAd
}) (RunAd)