import React from 'react';

import Header from '../Header/Header';
import AppContent from '../AppContent';

import {Wrapper} from './styles';

const DefaultLayout = () => {
  return (
    <Wrapper>
      <Header/>
      <div>
        <AppContent/>
      </div>
    </Wrapper>
  );
};

export default DefaultLayout;