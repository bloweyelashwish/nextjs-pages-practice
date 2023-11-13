import Link from 'next/link';
import styled from '@emotion/styled';

import { transition } from '~/styles/common';

interface StyledLinkProps {
  underline?: boolean;
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  all: unset;
  cursor: pointer;
  color: ${({ theme }) => theme.font.regular};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  ${transition()};

  &:hover {
    opacity: 0.7;
  }
`;
