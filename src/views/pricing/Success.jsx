import React, { useEffect, useCallback } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
// import * as userActions from '../../store/user/user.actions'

const Success = ({
  userData,
}) => {

  const nav = useNavigate()

  const [urlParams] = useSearchParams()

  const redirectToDashboard = () => {
    nav('/')
  }

  const handleSuccess = useCallback(async () => {
    const success = urlParams.get('success')
    const sessionId = urlParams.get('session_id')

    if (success && sessionId) {
      return
    }
  }, [urlParams])

  useEffect(() => {
    handleSuccess()
  }, [handleSuccess])

  return (
    <SuccessStyled>
      <div className="success-container">
        <h2>Subscription Successful!</h2>
        <p>Thank you for subscribing to Berry Bot.</p>
        <button className="dashboard-button" onClick={redirectToDashboard}>
          Login
        </button>
      </div>
    </SuccessStyled>
  )
}

export default connect(st => ({
  userData: st.userData
}),{
}) (Success)

const SuccessStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${pr => pr.theme.font.family.secondary};

  .success-container {
    text-align: center;
    padding: 2rem;
    background-color: ${pr => pr.theme.colors.white};
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    h2 {
      font-size: 2rem;
      color: ${pr => pr.theme.colors.primary};
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      color: ${pr => pr.theme.colors.text};
      margin-bottom: 2rem;
    }

    .dashboard-button {
      font-size: 1.2rem;
      font-weight: 600;
      color: ${pr => pr.theme.colors.white};
      background-color: ${pr => pr.theme.colors.primary};
      padding: 0.8rem 1.5rem;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${pr => pr.theme.colors.secondary};
      }
    }
  }
`
