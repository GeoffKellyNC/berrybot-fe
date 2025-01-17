import React from 'react'
import styled from 'styled-components'
import ToggleAnimation from '../animations/Toggle'
import AiAnimation from '../animations/AIAnime'
import MusicWaveAnimation from '../animations/MusicWave'
import ChatAnimation from '../animations/ChatMessage'
import FeaturesCard from './FeaturesCard'

const featuresData = [
    {
        title: 'Fully Customizable',
        icon: <ToggleAnimation />,
        description: 'Submit your ideas and have a say in Berry Bot development. Customize berry to your liking.'
    },
    {
        title: 'AI Powered by GPT-4',
        icon: <AiAnimation />,
        description: 'Enjoy advanced GPT-powered interactions in your chat.'
    },
    {
        title: 'Exclusive NCS Music',
        icon: <MusicWaveAnimation />,
        description: 'Access an exclusive library of non-copyrighted songs.'
    },
    {
        title: 'Smart Moderation',
        icon: <ChatAnimation />,
        description: 'Smart AI powered chat moderation. Berry will keep your chat safe and issue punishments to rule breakers.'
    }
]

const AboutHome = () => {
    return (
        <About>
            <div className='card-container'>
                {featuresData.map((card, idx) => <FeaturesCard key={idx} cardData={card} />)}
            </div>
        </About>
    )
}

export default AboutHome

const About = styled.div`
    color: ${pr => pr.theme.font.colors.primary};
    background-color: ${pr => pr.theme.colors.black};
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .card-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: -10px;
        grid-row-gap: 50px;
        margin-top: 30px;
        justify-items: center;

    }
}

@media screen and (max-width: 1000px) {
    .card-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
`
