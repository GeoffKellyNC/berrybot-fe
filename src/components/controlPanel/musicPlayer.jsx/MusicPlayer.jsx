import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'


const MusicPlayer = ({
    userData
}) => {
  return (
    <div>MusicPlayer</div>
  )
}

export default connect(st => ({
    userData: st.userData
}),{

}) (MusicPlayer)