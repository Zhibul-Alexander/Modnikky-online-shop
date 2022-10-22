import React from 'react';

import {BurgerContainer, BurgerDiv} from './styles';

export type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export const Burger = (props: Props) => {

  return (
    <BurgerContainer
      width={20}
      height={20}
      open={props.open}
      onClick={() => props.setOpen(!props.open)}
    >
      <BurgerDiv
        width={20}
        transform={20}
        open={props.open}
      />
      <BurgerDiv
        width={20}
        transform={20}
        open={props.open}
      />
      <BurgerDiv
        width={20}
        transform={20}
        open={props.open}
      />
    </BurgerContainer>
  );
};
