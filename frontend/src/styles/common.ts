import { css } from '@emotion/react';

export const boxShadow = (
  shadowColor1: string,
  shadowColor2: string,
  inset = false
) => {
  const insetStr = inset ? 'inset' : '';

  return css`
    box-shadow:
      ${insetStr} 0.5vmin 0.5vmin 1vmin ${shadowColor1},
      ${insetStr} -0.5vmin -0.5vmin 1vmin ${shadowColor2};
  `;
};

export const transition = () => css`
  transition: all 0.4s ease-in-out;
`;

export const borderRadius = () => css`
  border-radius: 1rem;
`;
