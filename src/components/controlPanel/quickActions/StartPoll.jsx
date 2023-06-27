import React, { useState } from 'react'
import { Button, Modal, Input, Space, Select, Tooltip } from 'antd';
import styled from 'styled-components';
import * as notifyTypes from '../../../store/notify/notify.types'
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import * as twitchActions from '../../../store/twitch/twitch.actions'


const GradientModal = styled(Modal)`
  .ant-modal-content { 
    background: linear-gradient(to right, #ddb206, #b9b700, #92bb0f, #64bc2d, #00bc49);
  }

  .ant-modal-title {
    color: black;
    background: linear-gradient(to right, #ddb206, #b9b700, #92bb0f, #64bc2d, #00bc49);
  }

  .add-btn {
    background-color: transparent;
    border: none;
    font-size: 15px;
    cursor: pointer;

    &:hover {
        scale: 1.1;
    }
  }

  .poll-options-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

  }
`;

const StartPoll = ({
    runTwitchPoll
}) => {
    const [pollOptions, setPollOptions] = useState([])
    const [pollTitle, setPollTitle] = useState('');
    const [pollDuration, setPollDuration] = useState('30');
    const [newOption, setNewOption] = useState('');
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch()

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = async  () => {


        if(pollOptions.length < 2 || pollTitle === '' || pollDuration === '') {
            dispatch({
                type: notifyTypes.SET_ERROR_NOTIFICATION,
                payload: 'You Must Enter at Least 2 Options and Have a Title!'
            })

            setTimeout(()=>{
                dispatch({
                    type: notifyTypes.CLEAR_ERROR_NOTIFICATION
                })
            }, 3000)
            return
        }

        await runTwitchPoll(pollTitle, pollDuration, pollOptions)

        setPollOptions([]);
        setPollTitle('');
        setPollDuration('30');
        setNewOption('');
        setLoading(true);
        setLoading(false);
        setOpen(false);
        return
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleOptionChange = (e) => {
        setNewOption(e.target.value);
    };
    
    const handleAddOption = () => {
        if (newOption.trim() !== '') {
            setPollOptions([...pollOptions, newOption]);
            setNewOption('');
            return
        }
        dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: 'You Must Enter an Option'
        })

        setTimeout(()=>{
            dispatch({
                type: notifyTypes.CLEAR_ERROR_NOTIFICATION
            })
        }, 3000)
    };
    
    const handleRemoveOption = (indexToRemove) => {
        setPollOptions(pollOptions.filter((_, index) => index !== indexToRemove));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // };

  return (
    <> 
        <Tooltip title='Start A Twitch Poll' color='green'> 
            <Button
                className='run-poll-btn'
                type='primary'
                ghost
                style={{
                    width: '100px',
                    height: '50px',
                    fontSize: '15px',
                    color: 'yellow'
                }}
                onClick = {showModal}
            > Start Poll </Button>
        </Tooltip>
        <GradientModal
            open={open}
            title="Twitch Poll Options"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                Return
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                Run Poll
                </Button>
            ]}
            >
                <Space direction="vertical" size='middle'>

                <Input 
                    placeholder='Poll Title'
                    onChange={(e) => setPollTitle(e.target.value)}
                />
                <Space.Compact style={{ width: '100%' }}>
                    <Input  placeholder='Enter Poll Option'
                            onChange={handleOptionChange}
                            style={{ width: '80%' }}/>
                    <Button type="primary" onClick={handleAddOption}>Add</Button>
                </Space.Compact>
                <Select
                    defaultValue='30'
                    style={{ width: 120 }}
                    onChange={(e) => setPollDuration(e)}
                    options={[
                        { value: '30', label: '30s' },
                        { value: '60', label: '60s' },
                        { value: '90', label: '90s' },
                        { value: '120', label: '120s' },
                    ]}
                />
                {pollOptions.map((option, index) => (
                    <li key={index}>
                        {option}
                        <button onClick={() => handleRemoveOption(index)}>-</button>
                    </li>
                ))}
                </Space>
         </GradientModal>
    </>
  )
}

export default connect(st => ({

}),{
    runTwitchPoll: twitchActions.runTwitchPoll
}) (StartPoll)
