import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { GiArtificialIntelligence } from 'react-icons/gi'


const AiStatus = () => {
  return (
    <Ais>
        <GiArtificialIntelligence 
            color = '#ffdb11'
            size = '20px'
        />
        <span className='status-text'> AI Online </span>
    </Ais>
  )
}

export default connect(st => ({

}),{

}) (AiStatus)


const Ais = styled.div`
background-image: linear-gradient(to right, #a603ff, #d900c9, #ee0097, #ef006c, #e4004b);
    width: 10% ;
    height: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;

    .status-text {
        margin-left: 5px;
        font-size: ${pr => pr.theme.font.size.large};
        color: ${pr => pr.theme.font.colors.priary};
    }



`