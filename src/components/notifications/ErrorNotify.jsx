import React from 'react'
import { message } from 'antd';
import { connect } from 'react-redux'
// import styled from 'styled-components'


const ErrorNotify = ({
    appError
}) => {
    const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
        {contextHolder}
        {
            appError.active && messageApi.error({
                content: appError.message,
                className: 'custom-class'
            })
        }
    </>

  )
}

export default connect(st => ({
    appError: st.appErrorNotification
}),{}) (ErrorNotify)