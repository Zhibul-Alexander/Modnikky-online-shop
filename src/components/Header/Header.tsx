import React, {useState} from 'react';
import Headroom from 'react-headroom';

import {SCREEN_TYPES} from '../../hooks/useScreenSizeHook/WindowScreenType/WindowScreenType';

import {
  Content,
  HeaderLi, HeaderLink,
  HeaderUl,
  Wrapper,
} from './styles';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Headroom>
      <Wrapper open={open}>
        <Content>
          <HeaderUl>
            <HeaderLi marginRight={80} className="header-li">
              New arrivals
            </HeaderLi>

            <HeaderLi marginRight={80} className="header-li">
              Shop
            </HeaderLi>

            <HeaderLi className="header-li">
              Collections
            </HeaderLi>
          </HeaderUl>

          <HeaderUl>
            <HeaderLi>
              <HeaderLink to="/home" className="header-logo"> Modnikky</HeaderLink>
            </HeaderLi>
          </HeaderUl>

          <HeaderUl>
            <HeaderLi marginRight={80} className="header-li">
              Search
            </HeaderLi>
            <HeaderLi marginRight={80} className="header-li">
              Sign in
            </HeaderLi>
            <HeaderLi marginRight={80} className="header-li">
              Bag
            </HeaderLi>
            <HeaderLi>
              Like
            </HeaderLi>
          </HeaderUl>

        </Content>
      </Wrapper>
    </Headroom>
  );
};

export default Header;