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
`;

export const ContainerTitle = styled.h3`
  margin: 0 0 160px 0;
`;

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const ContentCategory = styled(Link)`
  padding: 40px 50px;
  margin: 0 30px;

  text-decoration: none;
`;