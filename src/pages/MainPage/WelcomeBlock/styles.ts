import styled from 'styled-components';

export const Wrapper = styled.div<{ open: boolean }>`
  position: relative;
  top: 0;
  left: 0;

  min-width: 320px;
  max-width: 2880px;

  height: 100vh;
  width: 100vw;

  overflow-x: hidden;
  overflow-y: hidden;

  margin-top: ${({open}) => (open ? '0' : '-110px')};
`;

export const BackgroundContainer = styled.div<{ background: string }>`
  position: relative;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: url("${(props) => props.background}") no-repeat center;
  background-size: cover;
  border: none;

  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  position: absolute;
  bottom: 100px;
  left: 100px;

  padding: 50px;
  background: rgba(0, 0, 0, 0.3);

  @media (max-width: 1600px) {
    max-width: 755px;

    padding: 30px;
  }

  @media (max-width: 1200px) {
    position: relative;
    top: 0;
    left: 0;

    width: 100%;
    max-width: 1000px;

    padding: 20px;
  }
`;

export const Title = styled.h3`
  margin: 0 0 40px 0;

  text-transform: uppercase;

  @media (max-width: 1600px) {
    margin: 0 0 20px 0;
  }
`;

export const Text = styled.p`
  max-width: 1100px;

  margin-bottom: 40px;

  @media (max-width: 1600px) {
    margin: 0 0 20px 0;
  }
`;

export const Button = styled.button`
  padding: 40px 75px;

  background: transparent;

  text-transform: uppercase;

  @media (max-width: 1600px) {
    padding: 25px 50px;
  }
`;