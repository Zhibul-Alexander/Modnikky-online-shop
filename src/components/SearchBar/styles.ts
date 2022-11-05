import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 5;

  height: 100vh;
  width: 100%;

  overflow-x: hidden;
  overflow-y: hidden;
`;

export const BackgroundContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: #8C8C8C;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchContent = styled.div`
  position: relative;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.5s;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-self: start;

  padding-top: 15%;

  @media (max-width: 950px) {
    padding-top: 30%;
  }
`;

export const SearchIcon = styled.div`
  width: 70px;
  height: 70px;

  align-self: center;

  margin: 0 50px 0 0;

  @media (max-width: 950px) {
    width: 50px;
    height: 50px;

    margin: 0 30px 0 0;
  }

  @media (max-width: 550px) {
    width: 35px;
    height: 35px;

    margin: 0 20px 0 0;
  }
`;

export const SearchInput = styled.input`
  height: 30px;

  width: 100%;
  min-width: 1000px;

  background: transparent;
  border: 0;
  outline: 0;

  border-bottom: 2px solid white;

  padding: 15px 30px 15px 10px;

  @media (max-width: 950px) {
    min-width: 400px;
  }

  @media (max-width: 550px) {
    min-width: 250px;
  }
`;

export const SearchResult = styled.div`
  position: absolute;
  top: 55px;
  left: 0px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  margin-top: 20px;

  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;

  overflow: hidden;
`;

export const ResultLink = styled(Link)`
  text-decoration: none;
  display: block;

  width: -webkit-fill-available;
  text-align: start;

  padding: 10px 15px;

  :hover {
    background: #EDE7F0;
  }
`;



