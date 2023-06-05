import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import twitchLoginLink from '../../util/twitchLoginLink'

import { Button } from 'antd';






const HomeNav = () => {


    const handleLoginClick = (e) => {
        e.preventDefault()
        window.location.href = twitchLoginLink
    }


    return(
        <Nav>
            <div className='nav-left'>
                <img src="https://via.placeholder.com/150" alt="logo" className = 'logo-nav'/>
                <div className = 'nav-links'>
                    <NavLink to = '/pricing'> Pricing </NavLink>
                    <NavLink to = '/about'> About </NavLink>
                    <NavLink to = '/contact'> Contact </NavLink>
                </div>
            </div>
            <div className='nav-right'>
                <Button 
                    className='login-btn'
                    type="primary"
                    onClick = {handleLoginClick}> Login </Button>
            </div>
        </Nav>
    )
}

export default HomeNav


const Nav = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    background-color: black;

    .nav-left {
        display: flex;
        align-items: center;
        .logo-nav {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 1rem;
        }

        .nav-links {
            display: flex;
            align-items: center;
            a {
                font-size: ${pr => pr.theme.font.size.xl};
                font-family: ${pr => pr.theme.font.family.secondary};
                margin-right: 1rem;
                text-decoration: none;
                color: ${pr => pr.theme.colors.secondary};
                &:hover {
                    color: #${pr => pr.theme.font.colors.primary};
                }
            }
        }
    }






`