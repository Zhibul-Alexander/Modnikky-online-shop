import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  top: 0px;
  left: 0px;

  min-width: 320px;
  max-width: 2880px;

  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 150px;

  @media (max-width: 1600px) {
    padding: 100px;
  }

  @media (max-width: 1200px) {
    padding: 50px;
  }
`;

export const ContainerTitle = styled.h3`
  margin: 0 0 160px 0;

  text-align: center;

  @media (max-width: 1600px) {
    margin: 0 0 100px 0;
  }

  @media (max-width: 1200px) {
    margin: 0 0 50px 0;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  max-width: 1000px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ContentCategory = styled(Link)`
  padding: 40px 50px;
  box-sizing: border-box;

  text-align: center;

  text-decoration: none;

  transition: all 300ms ease-in-out;

  :hover {
    outline: 0;

    background-color: #eee1f6;
    box-shadow: 0 0 10px 0 #eee1f6 inset, 0 0 10px 4px #eee1f6;
  }

  @media (max-width: 1600px) {
    padding: 30px 40px;
  }

  @media (max-width: 1200px) {
    padding: 20px 30px;
  }

  @media (max-width: 800px) {
    margin-bottom: 20px;

    width: 180px;
  }
`;