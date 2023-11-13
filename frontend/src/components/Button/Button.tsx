import { FC } from 'react';
import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import type { MouseEvent } from 'react';

import type { AppTheme } from '~/styles/themes';
import { borderRadius, boxShadow, transition } from '~/styles/common';

export type ButtonColor = 'primary' | 'secondary' | 'danger' | 'warning';

export interface ButtonProps {
  children: string;
  color?: ButtonColor;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const getColors = (
  theme: AppTheme,
  color?: ButtonColor
): SerializedStyles => {
  switch (color) {
    case 'secondary':
      return css`
        color: ${theme.font.regular};
      `;
    case 'primary':
    case 'danger':
      return css`
        background: ${theme.components[color]};
        color: ${theme.font.button};
      `;
    case 'warning':
      return css`
        background: ${theme.components[color]};
        color: ${theme.font.warning};
      `;
    default:
      return css``;
  }
};

export const Button = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  justify-items: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-size: 1.6rem;
  padding: 1rem 3rem;
  outline: none;
  border: none;

  ${borderRadius()};
  ${transition()};
  ${({ color, theme }) => getColors(theme, color)};
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)};

  &:hover {
    opacity: 0.75;
  }

  &:active {
    ${({ theme }) =>
      boxShadow(theme.components.shadow1, theme.components.shadow2, true)};
  }
`;

Button.defaultProps = {
  color: 'primary',
};

type DefinedButton = Omit<ButtonProps, 'color'>;

export const PrimaryButton: FC<DefinedButton> = (props) => (
  <Button color="primary" {...props} />
);

export const SecondaryButton: FC<DefinedButton> = (props) => (
  <Button color="secondary" {...props} />
);

export const DangerButton: FC<DefinedButton> = (props) => (
  <Button color="danger" {...props} />
);

export const WarningButton: FC<DefinedButton> = (props) => (
  <Button color="warning" {...props} />
);
