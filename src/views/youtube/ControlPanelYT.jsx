import { Loupe } from '@mui/icons-material'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import * as authActions from '../../store/auth/auth.actions'

const ControlPanelYT = ({
    userData,
    logoutUserYT
}) => {
  return (
    <YTPanel>
        <h1> Welcome {userData.youtube_name} </h1>
        <button onClick={logoutUserYT}> Log Out </button>
    </YTPanel>
  )
}

export default connect(st => ({
    userData: st.userData,
}),{
    logoutUserYT: authActions.logoutUserYT
}) (ControlPanelYT)


const YTPanel = styled.div`
    color: white;

`