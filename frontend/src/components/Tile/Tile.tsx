import { FC, PropsWithChildren, ReactNode } from 'react';
import styled from '@emotion/styled';

import { boxShadow, borderRadius } from '~/styles/common';

export interface TileProps extends PropsWithChildren {
  header: ReactNode;
}

const Section = styled.section`
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)};
  ${borderRadius()};

  color: ${({ theme }) => theme.font.regular};
  background-color: ${({ theme }) => theme.background};
  padding: 1vmin 4vmin 4vmin;
`;

export const Tile: FC<TileProps> = ({ header, children, ...rest }) => (
  <Section {...rest}>
    <h2>{header}</h2>
    {children}
  </Section>
);
