import styled, { css } from 'styled-components';

export const LoaderContainer = styled.div`
  ${({ size, borderWidth }: any) => css`
    ${size
    ? css`
          width: ${size}px;
          height: ${size}px;
        `
    : css`
          width: 48px;
          height: 48px;
        `}
    ${borderWidth
    ? css`
          border: ${borderWidth}px solid #fff;
        `
    : css`
          border: 5px solid #fff;
        `}
  `};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
