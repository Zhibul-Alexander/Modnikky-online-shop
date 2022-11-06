import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;

  max-width: 1000px;

  margin: 0 auto;

  padding: 110px 20px 150px 20px;

  @media (max-width: 1600px) {
    padding: 110px 20px 100px 20px;
  }

  @media (max-width: 1280px) {
    padding: 110px 20px 50px 20px;
  }
`;

export const BagTitle = styled.h3`
  position: relative;

  border-bottom: 3px solid #D8D8D8;

  margin: 0;
  padding-bottom: 30px;

  text-transform: uppercase;
`;

export const BagItems = styled.span`
  position: absolute;
  bottom: 33px;
  left: 170px;

  @media (max-width: 950px) {
    bottom: 37px;
    left: 90px;
  }
`;

export const DefaultTitle = styled.h3`
  border-bottom: 3px solid #D8D8D8;

  margin: 0 0 50px 0;
  padding: 50px 0;

  text-transform: uppercase;
`;

export const ProductButton = styled.button`
  background: rgb(0, 0, 0);
  border: none;

  height: 90px;

  text-transform: uppercase;

  padding: 20px 40px;

  transition: all 150ms ease-in-out;
  color: #FFFFFF;

  :hover {
    background: #FFFFFF;
    color: #8C8C8C;
    border: 3px solid #8C8C8C;
  }
`;
