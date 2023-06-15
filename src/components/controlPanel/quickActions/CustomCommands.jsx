import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import * as twitchActions from '../../../store/twitch/twitch.actions'

const CustomCommands = ({
    userData
}) => {
  return (
    <div>CustomCommands</div>
  )
}

export default connect(st => ({
    userData: st.userData
}),{

}) (CustomCommands)