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
  justify-content: center;

  width: 160px;

  background: transparent;
  border: none;

  transition: all 150ms ease-in-out;

  :hover {
    color: #8C8C8C;
  }
`;

export const ProductButton = styled.button<{ disabledBg?: boolean }>`
  background: ${({disabledBg}) => (disabledBg ? ' rgba(0, 0, 0, .1)' : ' rgb(0, 0, 0)')};

  height: 90px;
  width: 100%;

  max-width: 320px;

  text-transform: uppercase;

  margin: 0 10px 30px 0;
  padding: 20px 40px;

  transition: all 150ms ease-in-out;
  color: #FFFFFF;

  border: 3px solid rgba(0, 0, 0, .1);
  outline: 0;

  :hover {
    background: ${({disabledBg}) => (disabledBg ? '' : '#FFFFFF')};
    color: ${({disabledBg}) => (disabledBg ? '' : '#8C8C8C')};
    border: ${({disabledBg}) => (disabledBg ? '' : '3px solid #8C8C8C')};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;