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
  padding: 0 120px 150px 120px;

  @media (max-width: 1600px) {
    padding: 0 83px 125px 83px;
  }
  @media (max-width: 1200px) {
    padding: 0 63px 100px 63px;
  }
`;

export const ContainerTitle = styled.h3`
  margin: 0 0 160px 37px;

  @media (max-width: 1600px) {
    margin: 0 0 125px 37px;
  }

  @media (max-width: 1200px) {
    margin: 0 0 100px 37px;
  }

  @media (max-width: 850px) {
    text-align: center;

    margin: 0 0 100px 0;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

