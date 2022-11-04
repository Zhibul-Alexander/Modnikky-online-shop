import React, {useEffect, useRef} from 'react';

import {Burger} from '../Burger/index';
import {MenuLink, MenuSearch, VerticalBurgerMenu} from './styles';
import {useOnClickOutside} from '../Hook/index';

export type IMenu = {
  open: boolean;
  setOpen: (v: boolean) => void;
  setSearchBarVisible: (v: boolean) => void;
};

export const Menu = ({open, setOpen, setSearchBarVisible}: IMenu) => {
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  let {width = 320, screenType} = window;

  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    if (open && width <= 600) {
      document.body.style.overflowY = 'clip';
    } else {
      document.body.style.overflowY = 'visible';
    }
  }, [width, open]);

  return (
    <div ref={node}>
      <VerticalBurgerMenu
        open={open}
      >
        <MenuLink
          to="/home"
          onClick={() => close()}
        >
          Modnikky
        </MenuLink>
        <MenuSearch
          onClick={() => {
            close();
            setSearchBarVisible(true);
          }}
        >
          Search
        </MenuSearch>
        <MenuLink
          to="/bag"
          onClick={() => close()}
        >
          Bag
        </MenuLink>
        <MenuLink
          to="/favorite"
          onClick={() => close()}
        >
          Favorite
        </MenuLink>
        {/*<MenuLink*/}
        {/*  to="/home"*/}
        {/*  onClick={() => close()}*/}
        {/*>*/}
        {/*  Sign in*/}
        {/*</MenuLink>*/}
      </VerticalBurgerMenu>
      <Burger open={open} setOpen={setOpen}/>
    </div>
  );
};
