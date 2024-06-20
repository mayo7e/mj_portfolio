import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.section`
  padding: 40px;
  background-color: ${({ theme }) => theme.panel};
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const Headline = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Subheadline = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
`;

const CVButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1em;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.hover};
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.border};
  }
`;

const WelcomeSection = () => {
  return (
    <WelcomeContainer>
      <Headline>Welcome to My Portfolio</Headline>
      <Subheadline>Fullstack Development, Data Pipelines, Machine Learning, and Open Source Projects</Subheadline>
      <CVButton href="/path/to/cv.pdf" download="YourName_CV.pdf">Download CV</CVButton>
    </WelcomeContainer>
  );
};

export default WelcomeSection;
