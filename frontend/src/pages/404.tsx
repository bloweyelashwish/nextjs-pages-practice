import styled from '@emotion/styled';

import { Logo } from '~/components/Logo';
import { StyledLink } from '~/components/StyledLink';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 83vh;
`;

const ErrorPageLink = styled(StyledLink)`
  text-decoration: underline;
  font-size: 3rem;
`;

export default function Error404Page() {
  return (
    <Wrapper>
      <Logo>404 - Page Not Found</Logo>
      <ErrorPageLink href="/">Go Home</ErrorPageLink>
    </Wrapper>
  );
}
