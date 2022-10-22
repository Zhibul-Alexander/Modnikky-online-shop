import styled from 'styled-components';
import {Link} from 'react-router-dom';

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

export const CardImg = styled.img`
  max-width: 600px;
  max-height: 800px;

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

  margin-right: 20px;
`;

export const CardSalePrice = styled.p`

`;