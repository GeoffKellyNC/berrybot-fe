import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as authActions from '../store/auth/auth.actions'

// Components Imports
import AboutHome from '../components/Home/AboutHome'
import HomeNav from '../components/Home/HomeNav'
import HomeMovileNave from '../components/Home/HomeMobileNav'
import CTA from '../components/Home/Cta'
import BetaWarningPopUp from '../components/Home/BetaWarn'



// ANTD COMPONENT IMPORTS




const HomePage = ({
    loginUserYouTube
}) => {
    // eslint-disable-next-line no-unused-vars
    const [mobileOpen, setMobileOpen] = useState(false)


    return(
        <Home>
            <HomeNav />
            {
                mobileOpen && <HomeMovileNave />
            }
            <CTA loginUserYouTube = { loginUserYouTube } />
            <AboutHome />
            <BetaWarningPopUp />
        </Home>
    )
}


export default connect(st => ({

}),{
    loginUserYouTube: authActions.loginUserYouTube,
}) (HomePage);


const Home = styled.div`



`