import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  top: 0px;
  left: 0px;

  min-width: 320px;
  max-width: 2880px;

  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template: repeat(3, 890px) / repeat(3, 600px);
  gap: 30px;

  border: none;
  outline: none;

`;