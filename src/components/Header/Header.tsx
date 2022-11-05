import React, {useState, useEffect} from 'react';
import Headroom from 'react-headroom';
import {cilHeart, cilSearch} from '@coreui/icons';

import Menu from './BurgerMenu/Menu/Menu';
import SearchBar from '../SearchBar/SearchBar';
import {useHeader} from '../../context/HeaderContext/HeaderContext';
import {useShoppingCart} from '../../context/ShoppingCartContext/ShoppingCartContext';

import {
  Content,
  HeaderLi, HeaderLink,
  HeaderUl,
  Wrapper,
  HeaderBurgerMenu,
  LikeIcon, LikeLink, SearchLink, SearchIcon, BagItems,
} from './styles';
import './index.css';


const Header = () => {
  const {height = 600, width = 320, screenType} = window;
  const {cartItems} = useShoppingCart();
  const {open, setOpen} = useHeader();

  const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = searchBarVisible ? 'hidden' : '';
  }, [searchBarVisible]);

  return (
    <Headroom>
      <Wrapper open={open}>
        <Content>
          <HeaderUl screenType={screenType} displayWidth={width} width={width} height={height} justifyContent={'start'}>
            <HeaderLi>
              <HeaderLink to="/home" className="header-logo">Modnikky</HeaderLink>
            </HeaderLi>
          </HeaderUl>

          <HeaderUl screenType={screenType}
                    displayWidth={width} width={width} height={height} justifyContent={'end'}>
            <HeaderLi style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                      onClick={() => setSearchBarVisible(true)} marginRight={30} className="header-li">
              <SearchLink marginRight={10}>
                <SearchIcon icon={cilSearch}/>
              </SearchLink>
              Search
            </HeaderLi>

            <HeaderLi marginRight={30}>
              <HeaderLink to="/bag" className="header-li">
                Bag
              </HeaderLink>
              {cartItems.length > 0 &&
                <BagItems className="header-li">
                  {`(${cartItems.reduce((total, cartItem) => {
                    return total + cartItem.options.quantity;
                  }, 0)})`}
                </BagItems>}
            </HeaderLi>

            <LikeLink marginRight={30} to="/favorite" className="header-li">
              <LikeIcon icon={cilHeart}/>
            </LikeLink>

            <HeaderLi className="header-li">
              Sign in
            </HeaderLi>
          </HeaderUl>

          <HeaderBurgerMenu screenType={screenType} width={width} height={height}>
            <Menu open={open} setOpen={setOpen} setSearchBarVisible={setSearchBarVisible}/>
          </HeaderBurgerMenu>

        </Content>
        {searchBarVisible && <SearchBar placeholder="Enter product ..." setSearchBarVisible={setSearchBarVisible}/>}
      </Wrapper>
    </Headroom>
  );
};

export default Header;