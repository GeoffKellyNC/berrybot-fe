import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { CloudServerOutlined } from '@ant-design/icons'

const ServerStatus = () => {
  return (
    <Server>
        <CloudServerOutlined 
            style = {{
                color: '#ffdb11',
                fontSize: '20px'
            }}
        />
        <span className='status-text'> Server Online </span>
    </Server>
  )
}

export default connect(st => ({

}),{

}) (ServerStatus)

const Server = styled.div`
background-image: linear-gradient(to right, #03ff3d, #19df2e, #1ebf21, #1ea014, #1a8307);
    width: 10% ;
    height: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    border-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);

    .status-text {
        margin-left: 5px;
        font-size: ${pr => pr.theme.font.size.large};
        color: ${pr => pr.theme.font.colors.priary};
    }



`