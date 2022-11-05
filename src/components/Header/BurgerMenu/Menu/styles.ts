import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const VerticalBurgerMenu = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100vh;
  width: 40%;
  position: fixed;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  display: ${({open}) => (open ? 'flex' : 'none')};

  transition: transform 0.5s ease-in-out;
  transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(100%)')};

  background: #8C8C8C;

  padding: 55px 0;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const MenuLink = styled(Link)<{ marginBottom?: number }>`
  margin-bottom: ${({marginBottom}) => marginBottom}px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;

  display: flex;
  text-align: center;
  text-transform: uppercase;

  color: black;

  flex: none;
  order: 0;
  flex-grow: 0;

  text-decoration: none;

  :hover {
    color: black;
  }
`;

export const MenuSearch = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;

  display: flex;
  text-align: center;
  text-transform: uppercase;

  color: black;

  flex: none;
  order: 0;
  flex-grow: 0;

  text-decoration: none;

  :hover {
    color: black;
  }
`;

export const BagItems = styled.span`
  margin: 0 0 0 10px;

  color: black;
`;
