import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

// Imported Components
import ServerStatus from './ServerStatus'
import AiStatus from './AiStatus'
import StreamStatus from './StreamStatus'

const StatusBar = () => {
  return (
    <Sbar>
        <ServerStatus />
        <AiStatus />
        <StreamStatus />
    </Sbar>
  )
}

export default connect(st => ({
    userData: st.userData
}),{

}) (StatusBar)


const Sbar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    padding: 0 20px;
    gap: 2rem;


`