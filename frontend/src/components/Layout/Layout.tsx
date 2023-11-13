import { FC, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

import { Logo } from '../Logo';
import { Input } from '../Input/Input';
import { IconButton } from '../IconButton';
import { StyledLink } from '../StyledLink';

interface LayoutProps extends PropsWithChildren {
  onThemeToggle: () => void;
  isDark: boolean;
}

const Wrapper = styled.div`
  display: grid;
  gap: 0.1rem;
  color: ${({ theme }) => theme.font.regular};
  background-color: ${({ theme }) => theme.background};
  padding: 0.5rem;
  grid-template-areas:
    'header nav'
    'search search'
    'content content'
    'footer footer';

  @media (min-width: 500px) {
    grid-template-columns: 1fr 3fr;
  }

  @media (min-width: 960px) {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      'header search nav'
      'content content content'
      'footer footer footer';
  }
`;

const StyledLogo = styled(Logo)`
  grid-area: header;
  display: flex;
  align-items: center;
  height: 4rem;
  justify-content: flex-start;

  & .logo-full {
    display: none;
  }

  @media (min-width: 560px) {
    & .logo-short {
      display: none;
    }

    & .logo-full {
      display: inline;
    }
  }
`;

const MainNav = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 2vmin;
`;

const SearchInput = styled(Input)`
  grid-area: search;
  width: 100%;
  height: 4rem;
`;

const Content = styled.main`
  grid-area: content;
`;

const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 5rem;
`;

const StyledLogoLink = styled(StyledLink)`
  padding-right: 1vw;
`;

export const Layout: FC<LayoutProps> = ({
  children,
  onThemeToggle,
  isDark,
}) => {
  return (
    <Wrapper>
      <StyledLogoLink href="/">
        <StyledLogo size={3}>
          <span className="logo-short">C8X</span>
          <span className="logo-full">CourseBox</span>
        </StyledLogo>
      </StyledLogoLink>
      <MainNav>
        <StyledLink href="/all">All</StyledLink>
        <StyledLink href="/news">News</StyledLink>
        <IconButton
          name={isDark ? 'Moon' : 'Sun'}
          size={1}
          onClick={onThemeToggle}
        />
      </MainNav>
      <SearchInput icon="Search" placeholder="Search" onChange={() => null} />
      <Content>{children}</Content>
      <Footer>{new Date().getFullYear()} All rights reserved.</Footer>
    </Wrapper>
  );
};
