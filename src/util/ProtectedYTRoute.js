import React from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

const ProtectedYTRoute = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    
    return children;
}

export default connect(st => ({
    isAuthenticated: st.isAuthenticated
}),null) (ProtectedYTRoute)