import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  max-width: 1000px;

  margin: 0 auto 50px auto;
  padding: 0 20px;
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
  left: 320px;

`;

export const DefaultTitle = styled.h3`
  border-bottom: 3px solid #D8D8D8;

  margin: 0 0 50px 0;
  padding: 50px 0;

  text-transform: uppercase;
`;

