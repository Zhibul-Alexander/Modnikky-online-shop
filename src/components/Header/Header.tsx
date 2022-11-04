import React, {useState, useEffect} from 'react';
import Headroom from 'react-headroom';

import {Menu} from './BurgerMenu/index';
import SearchBar from '../SearchBar/SearchBar';
import {useHeader} from '../../context/HeaderContext/HeaderContext';

import {
  Content,
  HeaderLi, HeaderLink,
  HeaderUl,
  Wrapper,
  HeaderBurgerMenu,
} from './styles';
import './index.css';

const Header = () => {
  const {height = 600, width = 320, screenType} = window;
  const {open, setOpen} = useHeader();

  const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = searchBarVisible ? 'hidden' : '';
  }, [searchBarVisible]);

  return (
    <Headroom>
      <>
        <Wrapper open={open}>
          <Content>
            <HeaderUl screenType={screenType} displayWidth={width} width={width > 1600 ? 620 : 445} height={height}>
              <HeaderLi marginRight={10} className="header-li">
                New arrivals
              </HeaderLi>
              <HeaderLi marginRight={10} className="header-li">
                Shop
              </HeaderLi>

              <HeaderLi className="header-li">
                Collections
              </HeaderLi>
            </HeaderUl>

            <HeaderUl screenType={screenType} margin={'0 40px'} displayWidth={width} width={width} height={height}
                      style={{width: 'auto'}}>
              <HeaderLi>
                <HeaderLink to="/home" className="header-logo">Modnikky</HeaderLink>
              </HeaderLi>
            </HeaderUl>
            <HeaderUl screenType={screenType} displayWidth={width} width={width > 1600 ? 550 : 395} height={height}>
              <HeaderLi onClick={() => {
                setSearchBarVisible(true);
              }} marginRight={10} className="header-li">
                Search
              </HeaderLi>
              <HeaderLi marginRight={10} className="header-li">
                Sign in
              </HeaderLi>
              <HeaderLi marginRight={10}>
                <HeaderLink to="/bag" className="header-li">Bag</HeaderLink>
              </HeaderLi>
              <HeaderLi>
                <HeaderLink to="/favorite" className="header-li">Favorite</HeaderLink>
              </HeaderLi>
            </HeaderUl>

            <HeaderBurgerMenu screenType={screenType} width={width} height={height}>
              <Menu open={open} setOpen={setOpen} setSearchBarVisible={setSearchBarVisible}/>
            </HeaderBurgerMenu>

          </Content>
          {searchBarVisible && <SearchBar placeholder="Enter product ..." setSearchBarVisible={setSearchBarVisible}/>}
        </Wrapper>
      </>
    </Headroom>
  );
};

export default Header;