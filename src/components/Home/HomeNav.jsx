import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import berryLogo from '../../assets/images/berry.png'







const HomeNav = () => {



    return(
        <Nav>
            <div className='nav-left'>
                <img src= {berryLogo} alt="logo" className = 'logo-nav'/>
                {/* <div className = 'nav-links'>
                    <NavLink to = '/pricing'> Pricing </NavLink>
                    <NavLink to = '/about'> About </NavLink>
                    <NavLink to = '/contact'> Contact </NavLink>
                </div> */}
            </div>
            <div className='nav-right'>

            </div>
        </Nav>
    )
}

export default HomeNav


const Nav = styled.div`
    background-color: black;

    .logo-nav {
        padding: 1rem 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 1rem;
    }







`