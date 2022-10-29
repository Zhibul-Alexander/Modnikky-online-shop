import styled from 'styled-components';

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
  margin-bottom: 30px;
`;

export const ProductSizeOption = styled.option`
`;

export const ProductButton = styled.button<{ disabledBg?: boolean }>`
  background: ${({disabledBg}) => (disabledBg ? ' rgba(0, 0, 0, .1)' : ' rgb(0, 0, 0)')};
  border: none;

  text-transform: uppercase;

  margin-bottom: 30px;
  padding: 30px 60px;

  color: #FFFFFF;
`;

export const ProductDescription = styled.span`

`;

