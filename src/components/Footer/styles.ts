import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;

  min-width: 320px;
  max-width: 2880px;

  text-align: center;
  margin: 0 auto;
  padding: 0 20px 20px 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template: 0.7fr 1fr / repeat(4, 1fr);
  gap: 0;

  grid-template-areas:
    "fifth fifth fifth fifth"
    "firstColumn secondColumn thirdColumn fourthColumn";

  border: none;
  outline: none;

  @media (max-width: 1600px) {
    grid-template: 0.9fr 1fr / repeat(4, 1fr);

    grid-template-areas:
    "fifth fifth fifth fifth"
    "firstColumn secondColumn thirdColumn fourthColumn";
  }

  @media (max-width: 1280px) {
    grid-template: 0.65fr 1fr 1fr / repeat(2, 1fr);

    grid-template-areas:
    "fifth fifth"
    "firstColumn secondColumn"
    "thirdColumn fourthColumn";
  }

  @media (max-width: 800px) {
    grid-template: repeat(5, auto) / 1fr;

    grid-template-areas:
    "fifth"
    "firstColumn"
    "secondColumn"
    "thirdColumn"
    "fourthColumn";
  }
`;

export const GridColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  @media (max-width: 1200px) {
    margin-bottom: 35px;
  }
`;

export const GridColumnTitle = styled.h3`
  margin: 0 0 50px 0;

  @media (max-width: 1600px) {
    margin: 0 0 35px 0;
  }
`;

export const GridColumnText = styled.p<{ marginBottom?: number }>`
  margin: ${(props) => `0 0 ${props.marginBottom}px 0`};

  cursor: pointer;

  @media (max-width: 1600px) {
    margin: 0 0 25px 0;
  }
`;

export const GridInputContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;

  display: flex;
  align-items: start;

  width: 120%;

  border-bottom: 1px solid black;

  @media (max-width: 850px) {
    width: 100%;

    margin-bottom: 40px;
  }
`;

export const GridInput = styled.input`
  position: relative;
  top: 0;
  left: 0;

  width: 85%;

  padding: 10px 0 10px 0;

  border: none;
  outline: none;
`;

export const GridButton = styled.button<{ buttonDisabled: boolean }>`
  position: absolute;
  top: 50%;
  right: -25px;

  transform: translate(-50%, -50%);

  background: transparent;
  border: none;
  outline: none;

  margin: 0;
  padding: 0;

  opacity: ${({buttonDisabled}) => buttonDisabled ? 0.1 : 1};
`;

export const MobileInputContainer = styled.div`
  justify-self: center;
  align-self: center;

`;

export const AccordionContainer = styled.div`
  padding: 30px 0;

  border-top: 2px dashed #D8D8D8;
`;
