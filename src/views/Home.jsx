import React, { useState } from 'react'
import styled from 'styled-components'

// Components Imports
import AboutHome from '../components/Home/AboutHome'
import HomeNav from '../components/Home/HomeNav'
import HomeMovileNave from '../components/Home/HomeMobileNav'
import CTA from '../components/Home/Cta'



// ANTD COMPONENT IMPORTS






const HomePage = () => {
    const [mobileOpen, setMobileOpen] = useState(false)


    return(
        <Home>
            <HomeNav />
            {
                mobileOpen && <HomeMovileNave />
            }
            <CTA />
            <AboutHome />
        </Home>
    )
}


export default HomePage;


const Home = styled.div`



`