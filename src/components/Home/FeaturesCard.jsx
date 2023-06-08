import React from "react";
import styled from 'styled-components'

const FeaturesCard = ({ cardData }) => {
    return (
        <Card>
            <div className='icon'>
                {cardData.icon}
            </div>
            <div className='card-body'>
                <h3 className="card-title">{cardData.title}</h3>
                <p className="card-desc">{cardData.description}</p>
            </div>
        </Card>
    );
}

export default FeaturesCard;

const Card = styled.div`
    background-color: ${pr => pr.theme.colors.dashboard_background};
    height: 300px;
    width: 80%;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    border: 1px solid ${pr => pr.theme.colors.primary};

    .card-body {
        padding: 0 2rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }

    .card-title {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
        font-family: ${pr => pr.theme.font.family.berry};
    }

    .card-desc {
        font-size: 1.5rem;
        font-weight: 400;
        width: 80%;
        margin-bottom: 1rem;
        line-height: 1.5;
        font-family: ${pr => pr.theme.font.family.secondary};
    }

    &:hover {
        transform: scale(1.05);
        background-color: ${pr => pr.theme.colors.primary};
    }

    .icon {
      margin-bottom: 10px; // added margin to separate icon and text
    }
}
`
