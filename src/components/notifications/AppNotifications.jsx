import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {  notification } from 'antd';




const AppNotifications = ({
    appNotification
}) => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        console.log('openNotification')
        api.info({
          message: 'Berry Notification',
          description: appNotification.message,
          style: {
            width: 600,
            backgroundImage: 'linear-gradient(to right, #5a5962, #595977, #535a8e, #455ca5, #235ebd)',
            color: 'white',
            border: '1px solid #216FFF '
          },
        });
      };
    

  return (
    <>
        {contextHolder}
        {
            appNotification.active && openNotification()
        }
    </>
  )
}

export default connect(st => ({
    appNotification: st.appNotification
}),{

}) (AppNotifications)