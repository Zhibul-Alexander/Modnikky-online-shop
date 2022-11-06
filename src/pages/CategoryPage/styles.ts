import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;

  min-width: 320px;
  max-width: 2880px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 110px 20px 150px 20px;

  @media (max-width: 1600px) {
    padding: 110px 20px 100px 20px;
  }

  @media (max-width: 1280px) {
    padding: 110px 20px 50px 20px;
  }

  @media (max-width: 950px) {
    padding: 0px 20px 50px 20px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template: repeat(auto-fit, 860px) / repeat(3, 600px);
  gap: 30px;

  border: none;
  outline: none;

  @media (max-width: 1920px) {
    grid-template: repeat(auto-fit, 690px) / repeat(3, 480px);

  }

  @media (max-width: 1600px) {
    grid-template: repeat(auto-fit, 550px) / repeat(3, 380px);
  }

  @media (max-width: 1280px) {
    grid-template: repeat(auto-fit, 440px) / repeat(3, 300px);
  }

  @media (max-width: 950px) {
    grid-template: repeat(auto-fit, 440px) / repeat(2, 300px);

    gap: 15px;
  }

  @media (max-width: 650px) {
    grid-template: repeat(auto-fit, 350px) / repeat(2, 240px);
  }

  @media (max-width: 500px) {
    grid-template: repeat(1, auto) / repeat(1, auto);

    gap: 30px;
  }
`;

export const ContainerTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;

  margin: 75px 0 75px 0;

  @media (max-width: 1600px) {
    margin: 65px 0 65px 0;
  }

  @media (max-width: 1200px) {
    margin: 50px 0 50px 0;
  }

  @media (max-width: 950px) {
    margin: 45px 0 50px 0;
  }
`;