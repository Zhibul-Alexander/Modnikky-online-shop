import React, {FC} from 'react';

import CategoryBlock from './CategoryBlock/CategoryBlock';
import SaleBlock from './SaleBlock/SaleBlock';
import WelcomeBlock from './WelcomeBlock/WelcomeBlock';

import {MainPageWrapper} from './styles';

const MainPage: FC = () => {
  return (
    <>
      <MainPageWrapper>
        <WelcomeBlock/>
        <CategoryBlock/>
        <SaleBlock/>
      </MainPageWrapper>
    </>
  );
};

export default MainPage;