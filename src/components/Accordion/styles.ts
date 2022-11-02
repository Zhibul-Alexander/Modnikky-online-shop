import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const HeaderTitle = styled.span`
  margin-left: 20px;
`;

export const Text = styled.p`
  margin: 30px 0 0 40px;
  padding-right: 20px;

  @media (max-width: 1280px) {
    margin: 20px 0 0 40px;
  }
`;