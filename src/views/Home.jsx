import React, { useState } from 'react'
import styled from 'styled-components'

// Components Imports
import HomeNav from '../components/Home/HomeNav'
import HomeMovileNave from '../components/Home/HomeMobileNav'



// ANTD COMPONENT IMPORTS
import { MenuOutlined } from '@ant-design/icons'






const HomePage = () => {
    const [mobileOpen, setMobileOpen] = useState(false)


    return(
        <Home>
            <div className = 'top-section'>
                <HomeNav />
                <MenuOutlined />
                {
                    mobileOpen && <HomeMovileNave />
                }
            </div>
        </Home>
    )
}


export default HomePage;


const Home = styled.div`

    .top-section {
        background-color: black;
        height: 100vh;
    }


`