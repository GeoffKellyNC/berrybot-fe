import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import * as userActions from '../../../store/user/user.actions'
import { Input, Button, Modal, Tooltip } from 'antd';


import Command from './Command'


const iFormValues = {
  name: '',
  prompt: '',
  action: ''
}
  

const CustomCommands = ({
    userData,
    customCommands,
    setCustomCommand,
    deleteCustomCommand
}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [addNew, setAddNew] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState(iFormValues)

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const addCommand = async (e) => {
    e.preventDefault()
    setLoading(true)
    const commandObj = {
      name: formValues.name,
      prompt: formValues.prompt,
      action: formValues.action,
    }
    await setCustomCommand(commandObj)
    setLoading(false)
    setAddNew(false)
    setFormValues(iFormValues)

    return
  }

  const handleDelete = async (id) => {
    await deleteCustomCommand(id)

    return
  }


  return (
    <>
      <Tooltip title='Custom Commands for your chat.' color = 'purple' placement='bottom'>
        <Button
          className = 'customCommands'
          type='primary'
          ghost
          style={{
            width: 'auto',
            height: '50px',
            fontSize: '15px',
            color: 'yellow'
          }}
          onClick={() => setModalVisible(!modalVisible)}
        >
          Commands
        </Button>
      </Tooltip>
      <GradientModal
        open={modalVisible}
        title = 'Custom Commands'
        onCancel = {() => setModalVisible(!modalVisible)}
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
            onClick={addCommand}
            disabled = {!addNew || !formValues.name || !formValues.prompt || !formValues.action}
          >
            Add Command
          </Button>
        ]}
      >
        {
          customCommands.length === 0 ? <p>You have no custom commands</p> :
          customCommands.map((com, i) => (
            <Command 
              key={i} 
              com={com} 
              handleDelete={handleDelete}
              />
          ))
        }
        {
          addNew &&
          <form>
            <Input
              name='name'
              placeholder='Command Name.. ex: Greeting'
              value={formValues.name}
              onChange={onChange}
            />
            <Input
              name='prompt'
              placeholder='Command Prompt.. ex: !hello'
              value={formValues.prompt}
              onChange={onChange}
            />

            <Input
              name='action'
              placeholder='Command Action.. ex: Hello Chat!'
              value={formValues.action}
              onChange={onChange}
            />
          </form>
        }
      </GradientModal>
    </>
  )
}

export default connect(st => ({
    userData: st.userData,
    customCommands: st.customCommands
}),{
  setCustomCommand: userActions.setCustomCommand,
  deleteCustomCommand: userActions.deleteCustomCommand
}) (CustomCommands)


const GradientModal = styled(Modal)`
  .ant-modal-content { 
    background: linear-gradient(to right, #212228, #272641, #362656, #4f1f66, #6f006f);
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