import { FC, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { boxShadow, transition } from '~/styles/common';
import { Icon, IconProps } from '../Icon';

interface ButtonWrapperProps {
  size: string;
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;

  ${({ size }) => css`
    width: ${size};
    height: ${size};
  `}

  ${transition()};

  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)};

  &:active {
    ${({ theme }) =>
      boxShadow(theme.components.shadow1, theme.components.shadow2, true)};
  }

  &:hover {
    opacity: 0.9;
  }
`;

type IconButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
} & IconProps;

export const IconButton: FC<IconButtonProps> = ({ onClick, ...props }) => (
  <ButtonWrapper
    onClick={onClick}
    size={`${(props.size || 2) * 2}rem`}
    title={props.name}
  >
    <Icon {...props} />
  </ButtonWrapper>
);
