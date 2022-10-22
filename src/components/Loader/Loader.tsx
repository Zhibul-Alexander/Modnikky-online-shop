import React from 'react';

import {LoaderContainer} from './styles';

const Loader = ({size, borderWidth}: any) => {
  // @ts-ignore
  return <LoaderContainer {...{size, borderWidth}} />;
};

export default Loader;
