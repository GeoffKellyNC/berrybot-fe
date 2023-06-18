import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AdminRoute = ({
    userData,
    children,
    isAuthenticated
}) => {

    if(!isAuthenticated || userData.account_type !== 'admin') {
        return <Navigate to = '/' />
    }
  return children
}

export default connect(st => ({
    userData: st.userData,
    isAuthenticated: st.isAuthenticated
}),null) (AdminRoute)