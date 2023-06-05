import React, { useEffect, useCallback } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import * as authActions from '../store/auth/auth.actions'

const Redirect = ({ loginUser }) => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const handleRedirect = useCallback(async () => {
    const code = searchParams.get('code')
    
    const isPaid = await loginUser(code)

    if (!isPaid) return navigate('/pricing')

    navigate('/control-panel')

  }, [loginUser, navigate, searchParams])

  useEffect(() => {
    handleRedirect()
  }, [handleRedirect])

  return (
    <div>
      <h1>Redirect</h1>
    </div>
  )
}

export default connect(
  (st) => ({}),
  {
    loginUser: authActions.loginUser,
  }
)(Redirect)
