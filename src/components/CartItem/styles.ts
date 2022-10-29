import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  border-bottom: 3px solid #D8D8D8;

  padding: 50px 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;

  margin: 0 0 50px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const ContainerImg = styled.div`
  width: 320px;
  height: 460px;

  margin-right: 40px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContainerTitle = styled.h3`
  margin: 20px 0 10px 0;
`;

export const ContainerPriceText = styled.p`
  margin: 0 0 50px 0;
`;

export const ContainerText = styled.p`
  margin: 0 0 20px 0;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  align-self: end;

  width: 160px;

  background: transparent;
  border: none;
`;
