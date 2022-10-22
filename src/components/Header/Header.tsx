import React, {useState} from 'react';
import Headroom from 'react-headroom';

import {SCREEN_TYPES} from '../../hooks/useScreenSizeHook/WindowScreenType/WindowScreenType';

import {
  Content,
  HeaderLi,
  HeaderUl,
  Wrapper,
} from './styles';

const Header = () => {
  let {width = 320, screenType} = window;

  const [open, setOpen] = useState<boolean>(false);

  return (
    <Headroom>
      <Wrapper open={open}>
        <Content
          height={
            screenType === SCREEN_TYPES.DESKTOP
              ? 112
              : 100
          }
        >
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
            <HeaderLi className="header-logo ">
              Modnikky
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