import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import * as userActions from '../store/user/user.actions'

const FeatureRequest = ({
    userData,
    sendFeatureRequest
}) => {
  const [twitchName, setTwitchName] = useState(userData.twitch_login);
  const [email, setEmail] = useState(userData.email);
  const [feature, setFeature] = useState('');

  const nav = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTwitchName('');
    setEmail('');
    setFeature('');
    await sendFeatureRequest({
        twitchName,
        twitchEmail: email,
        requestText: feature
    })
    await nav('/dashboard')
    return
  };

  return (
    <Container>
      <Title>Feature Request</Title>
      <RequestParagraph> We want your requests! Please feel free to suggest it no matter how crazy it may sound. Not every request is possible but we would love to hear about your ideas. We will work on responding to each one. You can also contact us on discord for updates!</RequestParagraph>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Twitch Name</Label>
          <Input
            type="text"
            value={twitchName}
            onChange={(event) => setTwitchName(event.target.value)}
            placeholder="Enter your Twitch name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Feature Request</Label>
          <Textarea
            value={feature}
            onChange={(event) => setFeature(event.target.value)}
            placeholder="Enter your feature request"
            required
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
        <CancelButton onClick = {() => nav('/control-panel')}>Cancel</CancelButton>
      </Form>
    </Container>
  );
};

export default connect(st => ({
    userData: st.userData
}),{
    sendFeatureRequest: userActions.sendFeatureRequest
}) (FeatureRequest)

const Container = styled.div`
  background-color: black;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: #222;
  color: white;
  width: 30rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #00ff00;
  }
`;

const Textarea = styled.textarea`
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: #222;
  color: white;
  width: 30rem;
  height: 10rem;
  resize: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #00ff00;
  }
`;

const Button = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 5px;
  border: none;
  background-color: #00ff00;
  color: black;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 2rem;

  &:hover {
    background-color: ${p => p.theme.colors.secondary};
  }
  `

const CancelButton = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 5px;
  border: none;
  background-color: #ff5983;
  color: black;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 2rem;

  &:hover {
    background-color: ${p => p.theme.colors.secondary};

  }

`;

const RequestParagraph = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #dcdde1;
  margin-bottom: 40px;
  grid-column: span 4;
  width: 50%;
  font-family: ${pr => pr.theme.font.family.primary};
  
`;
