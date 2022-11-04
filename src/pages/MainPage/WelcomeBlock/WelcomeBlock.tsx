import React from 'react';

import WelcomeBackground from '../../../assets/images/MainPage/WelcomeBackground.webp';

import {BackgroundContainer, Button, Content, Text, Title, Wrapper} from './styles';

const WelcomeBlock = () => {
  return (
    <Wrapper>
      <BackgroundContainer background={WelcomeBackground}>
        <Content>
          <Title className="welcome-title">New collection</Title>
          <Text className="welcome-text">
            Our easiest chuck-on-and-go staples come with a serious style heritage that’s liberating, sexy, comfy and
            supremely cool.
          </Text>
          <Button className="welcome-text border-1">Shop new arrivals</Button>
        </Content>
      </BackgroundContainer>
    </Wrapper>
  );
};

export default WelcomeBlock;