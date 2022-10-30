import styled from 'styled-components';
import CIcon from '@coreui/icons-react';

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;

  min-width: 320px;
  max-width: 2880px;

  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr 0.8fr;
  gap: 0;

  border: none;
  outline: none;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: auto;

  max-width: 1080px;
  max-height: 1600px;
`;

export const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  margin-left: 40px;
`;

export const ProductTitle = styled.h3`
  margin: 60px 0 30px 0;
`;

export const ProductPrice = styled.span`
  margin-bottom: 30px;
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

  margin-bottom: 30px;
`;

export const ProductSizeSelect = styled.select`
  padding: 5px 10px;
  margin-bottom: 30px;

  border: 3px solid #8C8C8C;
  border-radius: 5px;
`;

export const ProductSizeOption = styled.option`
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
`;

export const LikeButton = styled.button`
  width: 120px;
  height: 90px;

  padding: 0 20px;
  transition: all 300ms ease-in-out;

  box-sizing: border-box;
  border: none;
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
  margin-bottom: 30px;

  transition: all 150ms ease-in-out;
  color: #FFFFFF;

  :hover {
    background: #FFFFFF;
    color: #8C8C8C;
    border: 3px solid #8C8C8C;
  }
`;

export const ProductDescription = styled.span`

`;

