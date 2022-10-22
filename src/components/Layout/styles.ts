import styled from 'styled-components';

export const Wrapper = styled.div<{ background?: string }>`
  position: relative;
  top: 0;
  left: 0;

  background: url("${(props) => props.background}") repeat;
`;