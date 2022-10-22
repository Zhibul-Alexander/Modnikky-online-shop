import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;

  min-width: 320px;
  max-width: 2880px;

  height: 100vh;
  width: 100vw;

  overflow-x: hidden;
  overflow-y: hidden;

  margin-top: -110px;
`;

export const BackgroundContainer = styled.div<{ background: string }>`
  position: relative;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: url("${(props) => props.background}") no-repeat center;
  background-size: 100%;
  border: none;
`;

export const Content = styled.div`
  position: absolute;
  bottom: 100px;
  left: 100px;

  padding: 50px;
  background: rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h3`
  margin: 0 0 40px 0;

  text-transform: uppercase;
`;

export const Text = styled.p`
  max-width: 1100px;

  margin-bottom: 40px;
`;

export const Button = styled.button`
  padding: 40px 75px;

  background: transparent;

  text-transform: uppercase;
`;