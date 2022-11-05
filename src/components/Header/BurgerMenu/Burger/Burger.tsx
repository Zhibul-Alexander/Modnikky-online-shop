import React from 'react';

import {BurgerContainer, BurgerDiv} from './styles';

export type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Burger = (props: Props) => {

  return (
    <BurgerContainer
      width={30}
      height={30}
      open={props.open}
      onClick={() => props.setOpen(!props.open)}
    >
      <BurgerDiv
        width={30}
        transform={11}
        open={props.open}
      />
      <BurgerDiv
        width={30}
        transform={11}
        open={props.open}
      />
      <BurgerDiv
        width={30}
        transform={11}
        open={props.open}
      />
    </BurgerContainer>
  );
};

export default Burger