import React, {useEffect, useRef} from 'react';
import CIcon from '@coreui/icons-react';
import {cilHeart, cilSearch} from '@coreui/icons';

import Burger from '../Burger/Burger';
import useOnClickOutside from '../Hook/useOnClickOutside';
import {useShoppingCart} from '../../../../context/ShoppingCartContext/ShoppingCartContext';

import {MenuLink, MenuSearch, VerticalBurgerMenu, BagItems} from './styles';

export type IMenu = {
  open: boolean;
  setOpen: (v: boolean) => void;
  setSearchBarVisible: (v: boolean) => void;
};

const Menu = ({open, setOpen, setSearchBarVisible}: IMenu) => {
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);
  const {cartItems} = useShoppingCart();

  let {width = 320} = window;

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
          marginBottom={50}
        >
          Modnikky
        </MenuLink>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '50px'}}>
          <CIcon icon={cilSearch} style={{color: 'black', width: '24px', height: '24px', marginRight: '10px'}}/>
          <MenuSearch
            onClick={() => {
              close();
              setSearchBarVisible(true);
            }}
          >
            Search
          </MenuSearch>
        </div>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '50px'}}>
          <MenuLink
            to="/bag"
            onClick={() => close()}
          >
            Bag
          </MenuLink>
          {cartItems.length > 0 &&
            <BagItems>
              {`(${cartItems.reduce((total, cartItem) => {
                return total + cartItem.options.quantity;
              }, 0)})`}
            </BagItems>}
        </div>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <CIcon icon={cilHeart} style={{color: 'black', width: '24px', height: '24px', marginRight: '10px'}}/>
          <MenuLink
            to="/favorite"
            onClick={() => close()}
          >

            Favorite
          </MenuLink>
        </div>
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

export default Menu;