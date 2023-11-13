import { SVGProps, FC } from 'react';
import styled from '@emotion/styled';

import { Icons } from './Icons';

export type AvailableIcons = keyof typeof Icons;

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: AvailableIcons;
  size?: number;
}

export const Icon: FC<IconProps> = ({ name, size = 2, ...rest }) => {
  const SvgIcon = styled(Icons[name])`
    color: ${({ theme }) => theme.font.regular};
  `;
  const rem = `${size}rem`;
  const boxSize = { width: rem, height: rem };

  return <SvgIcon {...boxSize} {...rest} role="img" aria-label={name} />;
};
