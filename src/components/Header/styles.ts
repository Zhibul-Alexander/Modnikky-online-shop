import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {SCREEN_TYPES} from '../../hooks/useScreenSizeHook/WindowScreenType/WindowScreenType';

export const Wrapper = styled.div<{
  open: boolean;
}>`
  max-width: 2880px;
  min-width: 320px;

  color: #FFFFFF;

  text-align: center;

  margin: 0 auto;
  padding: 0 20px;

  background: linear-gradient(180deg,
  rgba(0, 0, 0, 0.75) 0%,
  rgba(0, 0, 0, 0.7) 10%,
  rgba(0, 0, 0, 0.65) 20%,
  rgba(0, 0, 0, 0.6) 30%,
  rgba(0, 0, 0, 0.55) 40%,
  rgba(0, 0, 0, 0.5) 50%,
  rgba(0, 0, 0, 0.4) 60%,
  rgba(0, 0, 0, 0.3) 70%,
  rgba(0, 0, 0, 0.2) 80%,
  rgba(0, 0, 0, 0.1) 90%,
  rgba(0, 0, 0, 0) 100%);

  overflow: hidden;
`;

export const Content = styled.header<{
  height: number;
}>`
  position: relative;
  top: 0px;
  left: 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-style: normal;
  font-weight: 700;

  text-transform: uppercase;
  box-sizing: border-box;

  height: ${(props) => props.height}px;
`;

export const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  list-style: none;

  padding: 0;
  margin: 0;


`;

export const HeaderLi = styled.li<{
  marginRight?: number;
}>`
  margin-right: ${(props) => props.marginRight}px;

  text-decoration: none;
  text-transform: uppercase;

  cursor: pointer;
`;

export const HeaderNavigationBarLIMedium = styled.li<{
  width: number;
  height: number;
  marginRight: number;
}>`
  pointer-events: visible;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  color: #ffffff;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  margin-right: ${(props) => props.marginRight}px;

  cursor: pointer;

  padding: 0px 5px;
`;

export const HeaderNavigationBarLILarge = styled.li<{
  hoverBg: string;
  width: number;
  height: number;
  marginRight: number;
}>`
  pointer-events: visible;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  color: #ffffff;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  margin-right: ${(props) => props.marginRight}px;

  cursor: pointer;

  padding: 0px 5px;

  :hover {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;

    background: url(${(props) => props.hoverBg}) no-repeat;
    background-size: cover;
  }
`;

// export const HeaderNavigationBarLink = styled(Link)`
//   text-decoration: none;
//
//   color: #ffffff;
//
//   transition-duration: 0.6s;
//
//   {HeaderNavigationBarLISmall}:hover & {
//     color: #070e18;
//     transition-duration: 0.6s;
//   }
//
//   {HeaderNavigationBarLIMedium}:hover & {
//     color: #070e18;
//     transition-duration: 0.6s;
//   }
//
//   {HeaderNavigationBarLILarge}:hover & {
//     color: #070e18;
//     transition-duration: 0.6s;
//   }
// `;

export const HeaderNavigationBarAuth = styled.div<{
  authHoverBg: string;
  width: number;
  height: number;
}>`
  pointer-events: visible;

  // display: {(props) => {
  //   return props.screenType === SCREEN_TYPES.MOBILE ? 'none' : 'flex';
  // }};
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  cursor: pointer;

  :hover {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;

    background: url(${(props) => props.authHoverBg}) no-repeat;
    background-size: cover;
  }
`;

export const HeaderNavigationBarAuthImg = styled.img<{
  marginRight: number;
  width: number;
  height: number;
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  margin-right: ${(props) => props.marginRight}px;

  ${HeaderNavigationBarAuth}:hover & {
    display: none;
  }
`;

export const HeaderNavigationBarAuthImgActive = styled(
  HeaderNavigationBarAuthImg,
)`
  display: none;

  ${HeaderNavigationBarAuth}:hover & {
    display: block;
  }
`;

export const HeaderNavigationBarAuthLink = styled(Link)`
  text-decoration: none;

  color: #ffffff;

  ${HeaderNavigationBarAuth}:hover & {
    color: #070e18;
  }
`;

export const HeaderBurgerMenu = styled.div`
  pointer-events: visible;

  // display: {(props) => {
  //   return props.screenType === SCREEN_TYPES.MOBILE ? 'block' : 'none';
  // }};
`;
