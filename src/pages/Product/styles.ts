import styled from 'styled-components';
import CIcon from '@coreui/icons-react';

import {SCREEN_TYPES} from '../../hooks/useScreenSizeHook/WindowScreenType/WindowScreenType';

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;

  min-width: 320px;
  max-width: 2880px;

  width: 100%;

  margin: 0 auto;
  padding-bottom: 150px;

  @media (max-width: 1600px) {
    padding-bottom: 100px;
  }

  @media (max-width: 1280px) {
    padding-bottom: 50px;
  }
`;

export const ProductContent = styled.div<{ screenType: SCREEN_TYPES }>`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: ${(props) => props.screenType === SCREEN_TYPES.DESKTOP ? 'row' : 'column'};
`;

export const ProductImgContainer = styled.div`
  width: 100%;
  height: 100%;

  max-width: 1080px;
  max-height: 1600px;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProductInformation = styled.div<{ screenType: SCREEN_TYPES }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  align-self: start;

  margin: ${(props) => props.screenType === SCREEN_TYPES.DESKTOP ? '100px 0 0 30px' : '40px 0 0 20px'};

  width: 100%;

  max-width: 600px;

  @media (max-width: 1800px) {
    max-width: 500px;
  }

  @media (max-width: 1600px) {
    max-width: 400px;
  }

  @media (max-width: 1280px) {
    max-width: 300px;
  }
`;

export const ProductTitle = styled.h3`
  margin: 0 0 10px 0;

`;

export const ProductPrice = styled.span`
  margin: 0 0 30px 0;

  @media (max-width: 1280px) {
    margin: 0 0 20px 0;
  }
`;

export const ProductText = styled.span`
  text-transform: uppercase;

  margin-bottom: 10px;

  color: #8C8C8C;
`;

export const ProductColorSquare = styled.div<{ color: string }>`
  width: 68px;
  height: 68px;

  background: ${props => props.color};
  border: 1px solid black;
  border-radius: 5px;

  margin-bottom: 30px;

  @media (max-width: 1600px) {
    width: 34px;
    height: 34px;
  }

  @media (max-width: 1280px) {
    margin: 0 0 20px 0;
  }
`;

export const ProductSizeSelect = styled.select`
  padding: 5px 10px;
  margin-bottom: 30px;

  border: 3px solid #8C8C8C;
  border-radius: 5px;

  @media (max-width: 1280px) {
    margin: 0 0 20px 0;
  }
`;

export const ProductSizeOption = styled.option`
`;

export const ProductButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 90px;

  max-width: 300px;
  margin-bottom: 10px;

  @media (max-width: 1600px) {
    height: 70px;
    max-width: 270px;

    margin-bottom: 20px;
  }

  @media (max-width: 1280px) {
    height: 50px;
    max-width: 180px;

    margin-bottom: 10px;
  }
`;

export const ProductButton = styled.button<{ disabledBg?: boolean }>`
  background: ${({disabledBg}) => (disabledBg ? ' rgba(0, 0, 0, .1)' : ' rgb(0, 0, 0)')};

  height: 90px;
  width: 100%;

  max-width: 300px;

  text-transform: uppercase;

  margin: 0 10px 30px 0;
  padding: 20px 40px;

  transition: all 150ms ease-in-out;
  color: #FFFFFF;

  border: 3px solid rgba(0, 0, 0, .1);
  outline: 0;

  :hover {
    background: ${({disabledBg}) => (disabledBg ? '' : '#FFFFFF')};
    color: ${({disabledBg}) => (disabledBg ? '' : '#8C8C8C')};
    border: ${({disabledBg}) => (disabledBg ? '' : '3px solid #8C8C8C')};
  }

  @media (max-width: 1600px) {
    height: 70px;
    max-width: 220px;

    padding: 10px 20px;
  }

  @media (max-width: 1280px) {
    height: 50px;
    max-width: 150px;

    padding: 5px 10px;
    margin: 0 10px 20px 0;
  }
`;

export const LikeButton = styled.button`
  width: 120px;
  height: 90px;

  padding: 0 20px;
  transition: all 300ms ease-in-out;

  box-sizing: border-box;
  border: none;

  @media (max-width: 1600px) {
    width: 90px;
    height: 70px;

    padding: 0 15px;
  }

  @media (max-width: 1280px) {
    width: 70px;
    height: 50px;

    padding: 0 10px;
  }
`;

export const LikeIcon = styled(CIcon)`
  width: 100%;
  height: 100%;

  outline: 0;
  transition: all 300ms ease-in-out;

  box-sizing: border-box;

  ${LikeButton}:hover & {
    transform: scale(1.2);
  }
`;

export const ProductButtonCalc = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  background: rgb(0, 0, 0);
  border: 3px solid rgb(0, 0, 0);

  text-transform: uppercase;

  padding: 8px 16px;

  transition: all 150ms ease-in-out;
  color: #FFFFFF;

  :hover {
    background: #FFFFFF;
    color: #8C8C8C;
    border: 3px solid #8C8C8C;
  }

  @media (max-width: 1600px) {
    width: 30px;
    height: 30px;

    padding: 6px 10px;
  }

  @media (max-width: 1600px) {
    width: 20px;
    height: 20px;

    padding: 4px 6px;
  }

`;

export const ProductButtonRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;

  max-width: 300px;

  background: rgb(0, 0, 0);
  border: none;

  text-transform: uppercase;

  padding: 11px 16px 5px 16px;
  margin: 0 0 30px 0;

  transition: all 150ms ease-in-out;
  color: #FFFFFF;

  :hover {
    background: #FFFFFF;
    color: #8C8C8C;
    border: 3px solid #8C8C8C;
  }

  @media (max-width: 1600px) {
    height: 30px;
    max-width: 270px;

    padding: 10px 20px;
  }

  @media (max-width: 1280px) {
    max-width: 180px;

    margin: 0 0 20px 0;
  }
`;

export const ProductDescription = styled.span`

`;

