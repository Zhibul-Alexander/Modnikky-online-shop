import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;

  min-width: 320px;
  max-width: 2880px;

  height: 100vh;
  width: 100vw;

  overflow-x: hidden;
  overflow-y: hidden;
`;

export const BackgroundContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgb(229, 229, 229);

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

export const SearchIcon = styled.div`
  width: 50px;
  height: 50px;

  align-self: center;

  margin-right: 50px;
`;

export const SearchInput = styled.input`
  height: 30px;

  width: 100%;
  min-width: 1000px;

  background: transparent;
  border: 0;
  outline: 0;

  border-bottom: 2px solid black;

  padding: 15px 30px 15px 10px;
`;

export const SearchResult = styled.div`
  position: absolute;
  top: 55px;
  left: 0px;

  display: flex;
  flex-direction: column;
  //align-items: start;
  //justify-content: start;

  margin-top: 20px;

  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;

  overflow: hidden;
`;

export const ResultLink = styled(Link)`
  width: 100%;

  text-decoration: none;

  padding: 10px;

  :hover {
    background: #EDE7F0;
  }
`;



