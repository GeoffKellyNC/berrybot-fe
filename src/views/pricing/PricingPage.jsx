import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import berryImg from '../../assets/images/berry.png';
import { connect } from 'react-redux';

const features = [
  {
    title: 'Full Bot Access',
    description: 'Unlock all features and capabilities of Berry Bot.',
  },
  {
    title: 'Feature Requests',
    description: 'Submit your ideas and have a say in Berry Bot development.',
  },
  {
    title: 'Extensive Music Library',
    description: 'Access a vast library of non-copyrighted songs.',
  },
  {
    title: 'GPT Integration',
    description: 'Enjoy advanced GPT-powered interactions in your chat.',
  },
  {
    title: 'Priority Support',
    description: 'Get faster assistance through our Discord community.',
  },
  {
    title: 'Personal Support Options',
    description: 'Receive dedicated support tailored to your needs.',
  },
  {
    title: 'Free Upgrades',
    description: 'Benefit from all future updates and improvements.',
  },
  {
    title: 'Beta Access',
    description: 'Be the first to try out new features and provide feedback.',
  },
];



const Pricing = ({ userData }) => {


  return (
    <PricingStyled>
      <NavLink to="/">
        <img src={berryImg} alt="Berry Logo" className="berry-logo" />
        <img
          src={userData.twitch_image}
          className="berry-logo"
          alt="Twitch Profile"
        />
      </NavLink>
      <div className="subscription-container">
        <h2>Hello {userData.twitch_display} Subscribe to Berry Bot</h2>
        <p>Get access to Berry Bot for just $5.99/month plus tax!</p>
        <form
          action={
            `https://api.berrythebot.app/payments/create-checkout-session?unx_id=${userData.unx_id}`
          }
          method="POST"
        >
          <input
            type="hidden"
            name="lookup_key"
            value="price_1Mscv3LcFcdB84myMK5fXPYn"
          />
          <button
            id="checkout-and-portal-button"
            type="submit"
            className="subscribe-button"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </PricingStyled>
  );
};

export default connect(
  (st) => ({
    userData: st.userData,
  }),
  {}
)(Pricing);

const PricingStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(45deg, #121212, #1b1b1b);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${(pr) => pr.theme.font.family.secondary};
  padding: 2rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);

  .berry-logo {
    height: 100px;
    width: 100px;
    margin-bottom: 2rem;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 5px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .subscription-container {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(45deg, #222, #333);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    p {
      font-size: 1.2rem;
      color: #BBB;
      margin-bottom: 2rem;
    }

    .subscribe-button {
      font-size: 1.2rem;
      font-weight: 600;
      background: linear-gradient(45deg, #4b4b4b, #666);
      padding: 0.8rem 1.5rem;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.3s ease;

      &:hover {
        background: linear-gradient(45deg, #444, #555);
        transform: scale(1.05);
      }
    }
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    width: 100%;
    max-width: 1200px;
    padding: 1rem;

    .feature-card {
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15
        text-align: center;
        margin: 1rem;
        background: linear-gradient(45deg, #222, #333);
        transition: transform 0.3s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
  
        &:hover {
          transform: scale(1.05);
        }
  
        h3 {
          font-size: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }
  
        p {
          font-size: 1rem;
          color: #BBB;
        }
      }
    }
  `;
  