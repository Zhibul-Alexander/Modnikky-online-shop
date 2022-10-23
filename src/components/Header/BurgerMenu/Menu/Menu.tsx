import React, {useEffect, useRef} from 'react';

import {Burger} from '../Burger/index';
import {MenuLink, VerticalBurgerMenu} from './styles';
import {useOnClickOutside} from '../Hook/index';

export type IMenu = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export const Menu = ({open, setOpen}: IMenu) => {
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
          to="/about"
          onClick={() => close()}
        >
          About
        </MenuLink>
        <MenuLink
          to="/gallery"
          onClick={() => close()}
        >
          Gallery
        </MenuLink>
        <MenuLink
          to="/news"
          onClick={() => close()}
        >
          News
        </MenuLink>
        <MenuLink
          to="/team"
          onClick={() => close()}
        >
          Team
        </MenuLink>
        <MenuLink
          to="/partners"
          onClick={() => close()}
        >
          Partners
        </MenuLink>
        <MenuLink
          to="/contacts"
          onClick={() => close()}
        >
          Contacts
        </MenuLink>
      </VerticalBurgerMenu>
      <Burger open={open} setOpen={setOpen}/>
    </div>
  );
};
