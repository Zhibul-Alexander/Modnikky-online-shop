import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;

  min-width: 320px;
  max-width: 2880px;

  width: 100%;

  text-align: center;
  margin: 0 auto;
  padding: 0 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template: 0.8fr 1fr / repeat(4, 1fr);
  gap: 0;

  grid-template-areas:
    "fifth fifth fifth fifth"
    "firstColumn secondColumn thirdColumn fourthColumn";

  border: none;
  outline: none;
`;

export const GridColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const GridColumnTitle = styled.h3`
  margin: 0 0 60px 0;
`;

export const GridColumnText = styled.span`
  margin: 0 0 40px 0;
`;

export const GridInputContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;

  width: 100%;

  max-width: 1000px;
`;

export const GridInput = styled.input`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;

  max-width: 850px;

  margin: 0 auto;
  padding: 10px 150px 10px 10px;

  border: none;
  outline: none;

  border-bottom: 1px solid black;
`;

export const GridButton = styled.button`
  position: absolute;
  top: 50%;
  right: -180px;

  transform: translate(-50%, -50%);

  background: transparent;
  border: none;
  outline: none;

  margin: 0;
  padding: 0;
`;
