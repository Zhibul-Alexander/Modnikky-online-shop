import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {SCREEN_TYPES} from '../../hooks/useScreenSizeHook/WindowScreenType/WindowScreenType';
import CIcon from '@coreui/icons-react';

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

export const HeaderUl = styled.ul<{ width: number, height: number, margin?: string, screenType: SCREEN_TYPES, displayWidth: number, justifyContent?: string }>`
  width: ${({width}) => width}px;
  margin: ${({margin = '0'}) => margin};

  display: ${(props) => {
    return props.screenType === SCREEN_TYPES.MOBILE || (props.displayWidth < 950 && props.height > 600) ? 'none' : 'flex';
  }};

  align-items: center;
  justify-content: ${({justifyContent}) => justifyContent};

  list-style: none;

  padding: 0;
`;

export const HeaderLi = styled.li<{ marginRight?: number }>`
  margin-right: ${({marginRight}) => marginRight}px;

  text-transform: uppercase;

  cursor: pointer;

  padding: 5px 10px;

  :hover {
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

  transition: all 300ms ease-in-out;

  ${HeaderLi}:hover & {
    color: black;

    transition: all 300ms ease-in-out;
  }
`;

export const LikeLink = styled(Link)<{ marginRight?: number }>`
  margin-right: ${({marginRight}) => marginRight}px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: 0;

  text-decoration: none;
  color: #FFFFFF;

  @media (max-width: 1600px) {
    width: 24px;
    height: 24px;
  }

  transition: all 300ms ease-in-out;

  ${HeaderLi}:hover & {
    color: black;

    transition: all 300ms ease-in-out;
  }
`;

export const LikeIcon = styled(CIcon)`
  width: 30px;
  height: 30px;

  outline: 0;

  box-sizing: border-box;
`;

export const SearchLink = styled.div<{ marginRight?: number }>`
  margin-right: ${({marginRight}) => marginRight}px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 30px;

  background: transparent;
  border: 0;

  text-decoration: none;
  color: #FFFFFF;

  transition: all 300ms ease-in-out;

  ${HeaderLi}:hover & {
    color: black;

    transition: all 300ms ease-in-out;
  }

  @media (max-width: 1600px) {
    width: 24px;
    height: 24px;
  }
`;

export const SearchIcon = styled(CIcon)`
  width: 100%;
  height: 100%;

  outline: 0;

  box-sizing: border-box;

  ${HeaderLi}:hover & {
    color: black;
  }
`;

export const BagItems = styled.span`
  margin: 0 0 0 10px;
`;

export const HeaderBurgerMenu = styled.div<{ screenType: SCREEN_TYPES, width: number, height: number }>`
  pointer-events: visible;

  display: ${(props) => {
    return props.screenType === SCREEN_TYPES.MOBILE || (props.width < 950 && props.height > 600) ? 'block' : 'none';
  }};
`;