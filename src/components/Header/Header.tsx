import React, {useState} from 'react';
import Headroom from 'react-headroom';

import {Menu} from './BurgerMenu/index';
import SearchBar from '../SearchBar/SearchBar';

import {
  Content,
  HeaderLi, HeaderLink,
  HeaderUl,
  Wrapper,
  HeaderBurgerMenu,
} from './styles';

const Header = () => {
  const {height = 600, width = 320, screenType} = window;

  const [open, setOpen] = useState<boolean>(false);

  return (
    <Headroom>
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
            <HeaderLi marginRight={10} className="header-li">
              Search
              {/*<SearchBar placeholder="Enter product ..."/>*/}
            </HeaderLi>
            <HeaderLi marginRight={10} className="header-li">
              Sign in
            </HeaderLi>
            <HeaderLi marginRight={10}>
              <HeaderLink to="/bag" className="header-li">Bag</HeaderLink>
            </HeaderLi>
            <HeaderLi>
              Like
            </HeaderLi>
          </HeaderUl>

          <HeaderBurgerMenu screenType={screenType} width={width} height={height}>
            <Menu open={open} setOpen={setOpen}/>
          </HeaderBurgerMenu>

        </Content>
      </Wrapper>
      {/*<SearchBar placeholder="Enter search terms ..."/>*/}
    </Headroom>
  );
};

export default Header;