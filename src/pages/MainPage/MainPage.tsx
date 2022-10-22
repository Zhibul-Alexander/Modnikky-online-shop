import React, {FC} from 'react';
import CategoryBlock from './CategoryBlock/CategoryBlock';
import SaleBlock from './SaleBlock/SaleBlock';

const MainPage: FC = () => {
  return (
    <div>
      MainPage
      <CategoryBlock/>
      <SaleBlock/>
    </div>
  );
};

export default MainPage;