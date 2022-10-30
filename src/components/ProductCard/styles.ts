import styled from 'styled-components';
import {Link} from 'react-router-dom';
import CIcon from '@coreui/icons-react';

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  max-width: 600px;
  max-height: 890px;
`;

export const CardLink = styled(Link)`
  max-width: 600px;
  max-height: 800px;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  align-self: start;
`;

export const CardPrice = styled.p`
  text-decoration: line-through;

  margin: 20px 20px 0 0;
`;

export const CardSalePrice = styled.p`
  margin: 20px 20px 0 0;
`;

export const LikeButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 55px;
  height: 55px;

  background: transparent;
  border: 0;
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