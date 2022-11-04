import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {SCREEN_TYPES} from '../../hooks/useScreenSizeHook/WindowScreenType/WindowScreenType';

export const Wrapper = styled.div<{
  open: boolean;
}>`
  position: ${(props) => (props.open ? 'fixed' : 'relative')};
  top: 0;
  left: 0;

  width: 100%;

  max-width: 2880px;
  min-width: 320px;

  color: #FFFFFF;

  text-align: center;

  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  background: ${(props) => (props.open ? 'transparent' : 'linear-gradient(180deg,\n  rgba(0, 0, 0, 0.5) 0%,\n  rgba(0, 0, 0, 0.45) 10%,\n  rgba(0, 0, 0, 0.4) 20%,\n  rgba(0, 0, 0, 0.35) 30%,\n  rgba(0, 0, 0, 0.3) 40%,\n  rgba(0, 0, 0, 0.25) 50%,\n  rgba(0, 0, 0, 0.2) 60%,\n  rgba(0, 0, 0, 0.15) 70%,\n  rgba(0, 0, 0, 0.1) 80%,\n  rgba(0, 0, 0, 0.05) 90%,\n  rgba(0, 0, 0, 0) 100%);')};
  overflow: hidden;
`;

export const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  top: 0;
  left: 0;

  font-style: normal;
  font-weight: 700;

  text-transform: uppercase;
  box-sizing: border-box;

  height: 110px
`;

export const HeaderUl = styled.ul<{ width: number, height: number, margin?: string, screenType: SCREEN_TYPES, displayWidth: number }>`
  width: ${({width}) => width}px;
  margin: ${({margin = '0'}) => margin};

  display: ${(props) => {
    return props.screenType === SCREEN_TYPES.MOBILE || (props.displayWidth < 1200 && props.height > 600) ? 'none' : 'flex';
  }};

  align-items: center;
  justify-content: space-between;

  list-style: none;

  padding: 0;
`;

export const HeaderLi = styled.li<{ marginRight?: number }>`
  margin-right: ${({marginRight}) => marginRight}px;

  text-transform: uppercase;

  cursor: pointer;

  padding: 5px 10px;

  transition: all 150ms ease-in-out;

  :hover {
    transition: all 150ms ease-in-out;

    color: black;

    outline: 0;

    background-color: #eee1f6;
    box-shadow: 0 0 10px 0 #eee1f6 inset, 0 0 10px 4px #eee1f6;
  }
`;

export const HeaderLink = styled(Link)`
  width: 100%;
  height: 100%;

  text-decoration: none;
  color: #FFFFFF;

  transition: all 150ms ease-in-out;
  
  ${HeaderLi}:hover & {
    color: black;

    transition: all 150ms ease-in-out;
  }

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

export const HeaderBurgerMenu = styled.div<{ screenType: SCREEN_TYPES, width: number, height: number }>`
  pointer-events: visible;

  display: ${(props) => {
    return props.screenType === SCREEN_TYPES.MOBILE || (props.width < 1200 && props.height > 600) ? 'block' : 'none';
  }};
`;


