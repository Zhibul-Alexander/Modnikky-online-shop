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
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //justify-content: center;

  padding: 180px;
`;

export const ContainerTitle = styled.h3`
  margin-bottom: 160px;
`;

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

