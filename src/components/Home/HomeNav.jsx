import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import berryLogo from '../../assets/images/berry.png'







const HomeNav = () => {



    return(
        <Nav>
            <div className='nav-left'>
                <img src= {berryLogo} alt="logo" className = 'logo-nav'/>
                <div className = 'nav-links'>
                    {/* <NavLink  to = '/'> About </NavLink>
                    <NavLink to = '/'> Contact </NavLink> */}
                </div>
            </div>
        </Nav>
    )
}

export default HomeNav


const Nav = styled.div`
    background-color: black;
    border-bottom: 1px solid ${pr => pr.theme.colors.primary};

    .logo-nav {
        padding: 1rem 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 1rem;
    }

    .nav-left {
        display: flex;
        align-items: center;
    }

    .nav-links {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 300px;
    }

    .nav-links a {
        color: ${pr => pr.theme.font.colors.primary};
        text-decoration: none;
        font-size: 1rem;
        font-weight: 100;
        font-family: ${pr => pr.theme.font.family.secondary};
        padding: 1rem 2rem;
        transition: all 0.3s ease-in-out;
    }

    .nav-links a:hover {
        color: ${pr => pr.theme.colors.primary};
        border-bottom: 1px solid ${pr => pr.theme.colors.primary};
        border-radius: 5px;
    }

    // .nav-links a.active {
    //     color: ${pr => pr.theme.colors.primary};
    //     background-color: ${pr => pr.theme.font.colors.primary};
    //     border-radius: 5px;
    // }






`