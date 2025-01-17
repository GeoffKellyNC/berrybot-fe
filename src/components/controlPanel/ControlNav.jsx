import React, { useState, useEffect , useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import * as authActions from '../../store/auth/auth.actions'
import * as userActions from '../../store/user/user.actions'
import styled from 'styled-components'
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';




const ControlNav = ({
    userData,
    logoutUserTwitch,
    getStripeId,
    sendCusPortal,
    userLevel,
    getStripeSession,
    setTourOpen
}) => {
    const [stripeId, setStripeId] = useState(null)


    const handleBilling = async () => {
        await sendCusPortal(stripeId)
    }

    const setUp = useCallback(async () => {
        const id = await getStripeSession()
        console.log('STRIP ID', id) //!DEBUG
        setStripeId(id)
        return
    }, [getStripeSession])

    useEffect(() => {
        setUp()
    }, [setUp])

    return(
        <Cnav>
            <div className = 'left-nav'>
            <Avatar
                size={{ xs: 24, sm: 32, md: 33, lg: 44, xl: 60, xxl: 60 }}
                icon={<AntDesignOutlined />}
                src = {userData.twitch_image}
                className = 'user-avatar'
            />
            <span className = 'user-name'>{userData.twitch_display}</span>
            </div>
            <div className='right-nav '>
                {/* <div className="help-nav link-container">
                    <span className='link help-link'>Help</span>
                </div> */}
                <div className="logout-nav link-container">
                    <span
                    onClick = {() => logoutUserTwitch(userData.twitch_login)}
                    className='link logout-link'>Logout</span>
                </div>
                <div className="billing-nav link-container">
                    <span 
                        onClick = {handleBilling}
                        className='link billing-link'>Billing</span>
                </div>
                <div className = 'feature-req-nav link-container'>
                    <NavLink to = '/feature-request' className = 'link feature-req-link'> Requests </NavLink>
                </div>
                <div className = 'tour-nav link-container'>
                    <Button
                        type='primary'
                        ghost
                        onClick = {() => setTourOpen(true)}
                        className = 'link tour-link'> Tour </Button>
                </div>
                {
                    userLevel === 'admin' && (
                        <div className = 'admin-nav link-container'>
                            <NavLink to = '/admin' className = 'link admin-link'> Admin </NavLink>
                        </div>
                    )
                }
            </div>
        </Cnav>
    )
}

export default connect(st => ({
    userData: st.userData,
    userLevel: st.userLevel
}),{
    logoutUserTwitch: authActions.logoutUserTwitch,
    getStripeId: userActions.getStripeId,
    sendCusPortal: userActions.sendCusPortal,
    getStripeSession: authActions.getStripeSession
}) (ControlNav)


const Cnav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10vh;
    background: ${pr => pr.theme.colors.black};
    color: white;
    box-shadow: 0 0 10px rgba(0,0,115,0.5);
    border-bottom: 1px solid ${pr => pr.theme.colors.primary};

    .right-nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 30%;
        height: 100%;
        padding-right: 2%;

    }

    .left-nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 20%;
        height: 100%;
        gap: -38%;
    }

    .link-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .link {
        font-size: ${pr => pr.theme.font.size.large};
        font-family: ${pr => pr.theme.font.family.secondary};
        font-weight: 600;
        color: white;
        text-decoration: none;
        transition: all 0.3s ease;
        cursor: pointer;
        
        &:hover {
            color: #BBB;
        }
    }

    .user-avatar {
        cursor: pointer;
        transition: all 0.3s ease;
        

        &:hover {
            transform: scale(1.05);
        }

    }

    .user-name {
        text-transform: uppercase;
        font-family: ${pr => pr.theme.font.family.secondary};
    }

    .tour-link {
        color: white;
    }

`