import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Button, Modal, Input, Tooltip }  from 'antd'
import * as userActions from '../../../store/user/user.actions'
import * as notifyTypes from '../../../store/notify/notify.types'

import ScheduledTask from './ScheduledTask'

const iFormValues = {
  name: '',
  message: '',
  time: ''
}

const ScheduledActions = ({
  userData,
  scheduledMessages,
  setScheduledMessage,
  deleteScheduledMessage
}) => {
  const [visible, setVisible] = useState(false)
  const [formValues, setFormValues] = useState(iFormValues)
  const [loading, setLoading] = useState(false)
  const [addNew, setAddNew] = useState(false)

  const dispatch = useDispatch()

  const onChange = (e) => {

    let value = e.target.value;

    if (e.target.name === 'time') {
        if (/[^0-9]/.test(value)) { 
          console.error('Invalid input. Only numeric characters (0-9) are allowed.');
          dispatch({
            type: notifyTypes.SET_ERROR_NOTIFICATION,
            payload: 'Invalid input. Only numeric characters (0-9) are allowed.'
          })

          return; 
        }
      }

    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const scheduleMessage = async (e) => {
    e.preventDefault()
    setLoading(true)
    const commandObj = {
        unx_id: userData.unx_id,
        scheduleName: formValues.name,
        scheduleMessage: formValues.message,
        timer: formValues.time,
        active: true
    }
    await setScheduledMessage(commandObj)
    setFormValues(iFormValues)
    setLoading(false)
    setVisible(false)
  }

  return (
    <>
        <Tooltip title='Run Scheduled Messages in chat' color = 'magenta' placement='bottom'>
          <Button
              className='run-poll-btn'
              type='primary'
              ghost
              style={{
                width: 'auto',
                height: '50px',
                fontSize: '15px',
                color: 'yellow'
              }}
              onClick = {() => setVisible(!visible)}
          > Schedules </Button>
        </Tooltip>
        <GradientModal
            open={visible}
            title = 'Scheduled Commands'
            onCancel = {() => setVisible(!visible)}
            footer = {[
                <Button
                    onClick={() => setAddNew(!addNew)}
                >
                    {addNew ? 'Cancel' : 'Add New'}
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    loading={loading}
                    onClick={scheduleMessage}
                    disabled = {!addNew || !formValues.name || !formValues.message || !formValues.time}
                >
                    Schedule
                </Button>
            ]}
        >
            {
                scheduledMessages.length === 0 ? <p>No Scheduled Messages</p> :
                scheduledMessages.map((task, idx) => (
                    <ScheduledTask
                        key = {idx}
                        task = {task}
                        deleteScheduledCommand = {deleteScheduledMessage}
                    />
                ))
            }
            {
                addNew && (
                    <>
                        <Input
                            placeholder="Command Name"
                            style = {{
                                    width: '100%',
                            }}
                            name = 'name'
                            value = {formValues.name}
                            onChange = {onChange}
                        />
                        <Input
                            placeholder="Command Message"
                            style = {{
                                    width: '100%',
                            }}
                            name = 'message'
                            value = {formValues.message}
                            onChange = {onChange}
                        />
                        <Input
                            placeholder="Time in Minutes"
                            style = {{
                                    width: '100%',
                            }}
                            name = 'time'
                            value = {formValues.time}
                            onChange = {onChange}
                        />
                    </>
                )
            }

        </GradientModal>
    </>
  )
}

export default connect(st => ({
  userData: st.userData,
  scheduledMessages: st.scheduledMessages
}),{
  setScheduledMessage: userActions.setScheduledMessage,
  deleteScheduledMessage: userActions.deleteScheduledMessage
}) (ScheduledActions)


const GradientModal = styled(Modal)`
  .ant-modal-content { 
    background: linear-gradient(to right, #ddb206, #b9b700, #92bb0f,#4caf50, #3e8e41, #2a7886, #1b5e8f);
    color: white;
    border-radius: 20px;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }

  .ant-modal-close-x {
    color: white;
  }

  .ant-modal-header {
    background: none;
    border-bottom: none;
    text-align: center;
  }

  .ant-modal-footer {
    border-top: none;
  }

  .ant-modal-body {
    padding: 20px 50px;
  }

  .ant-modal-confirm-body-wrapper button {
    font-size: 14px;
    font-weight: bold;
  }

  .ant-modal-confirm-title {
    font-size: 20px;
    font-weight: bold;
  }

  .ant-modal-confirm-content {
    font-size: 16px;
    font-weight: normal;
  }
`;

