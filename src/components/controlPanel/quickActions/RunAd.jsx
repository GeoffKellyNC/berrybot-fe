import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button, Modal, Select, Tooltip } from 'antd';

import * as twitchActions from '../../../store/twitch/twitch.actions';
import { fontFamily } from '@mui/system';

const GradientModal = styled(Modal)`
  .ant-modal-content {
    background: linear-gradient(to right, #006fff, #5a51cc, #66359c, #601b6f, #500347);
  }

  .ant-modal-title {
    color: white;
    background: linear-gradient(to right, #006fff, #5a51cc, #66359c, #601b6f, #500347);
    }
`;




const RunAd = ({ userData, runTwitchAd }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [adLength, setAdLength] = useState('30');

  const showModal = () => {
    setOpen(true);
  };

  const runAd = async () => {
    await runTwitchAd(adLength);
  };

  const handleOk = async () => {
    setLoading(true);
    await runAd();
    setLoading(false);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setAdLength(e);
  };

  const content = (
    <div className="ad-help help">
      <p
        className="help-text"
        style={{
          color: 'white',
        }}
      >
        You must be an affiliate or partner to use this feature
      </p>
    </div>
)

  return (
    <>
      <Tooltip
        title = 'Click to Run Twitch Ad'
        color = 'cyan'
       >
        <Button
          className='run-ad-btn'
          type='primary'
          ghost
          style={{
            width: '100px',
            height: '50px',
            fontSize: '15px',
            color: 'yellow'
          }}
          onClick={showModal}
        >
          Run Ad
        </Button>
      </Tooltip>
      <GradientModal
        open={open}
        title='Select Ad Length'
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key='submit'
            type='primary'
            loading={loading}
            onClick={handleOk}
          >
            Run Ad
          </Button>,
        ]}
      >
        <Select
          defaultValue='30'
          style={{ width: 120 }}
          onChange={(e) => handleChange(e)}
          options={[
            { value: '30', label: '30s' },
            { value: '60', label: '60s' },
            { value: '90', label: '90s' },
            { value: '120', label: '120s' },
          ]}
        />
      </GradientModal>
    </>
  );
};

export default connect(
  (st) => ({
    userData: st.userData,
  }),
  {
    runTwitchAd: twitchActions.runTwitchAd,
  }
)(RunAd);
