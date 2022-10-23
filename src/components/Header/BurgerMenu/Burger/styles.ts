import styled from 'styled-components';

export const BurgerContainer = styled.button<{
  open: boolean;
  width: number;
  height: number;
}>`
  position: absolute;
  left: ${({open}) => (open ? '32%' : '0px')};
  top: 38px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 0;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;

  @media (max-width: 600px) {
    left: ${({open}) => (open ? 'initial' : '0px')};
    right: ${({open}) => (open ? '0px' : 'initial')};
  }
`;

export const BurgerDiv = styled.div<{
  open: boolean;
  width: number;
  transform: number;
}>`
  position: relative;
  width: ${(props) => props.width}px;
  height: 2px;
  transition: all 0.5s linear;
  background: #ffffff;

  :first-child {
    transform: ${({open, transform}) =>
            open
                    ? `translateY(${transform}px) rotate(45deg)`
                    : 'translateY(0px) rotate(0)'};
  }

  :nth-child(2) {
    opacity: ${({open}) => (open ? '0' : '1')};
    transform: ${({open}) => (open ? 'translateX(30px)' : 'translateX(0)')};
  }

  :nth-child(3) {
    transform: ${({open}) =>
            open ? 'translateY(-9px) rotate(-45deg)' : 'translateY(0px) rotate(0)'};
  }
`;
