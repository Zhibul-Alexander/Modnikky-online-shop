import React from 'react';

import Header from '../Header/Header';
import AppContent from '../AppContent';
import Footer from '../Footer/Footer';

import {Wrapper} from './styles';

const DefaultLayout = () => {
  return (
    <Wrapper>
      <Header/>
      <AppContent/>
      <Footer/>
    </Wrapper>
  );
};

export default DefaultLayout;