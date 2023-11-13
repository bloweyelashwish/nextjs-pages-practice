import { FC, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import Image, { type ImageProps } from 'next/image';

import { borderRadius, boxShadow, transition } from '~/styles/common';
import { StyledLink } from '../StyledLink';

interface CourseProps extends PropsWithChildren {
  header: string;
  imageProps: ImageProps;
  link: string;
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1vmin 4vmin;
  width: 94vw;
  position: relative;

  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font.regular};

  ${transition()};
  ${borderRadius()};
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)};

  @media (min-width: 900px) {
    width: 46vw;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const ImageWrapper = styled.div`
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CourseLink = styled(StyledLink)`
  &::after {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    content: '';
  }
`;

export const Course: FC<CourseProps> = ({
  children,
  header,
  imageProps,
  link,
}) => {
  return (
    <Section>
      <h2>
        <CourseLink href={link}>{header}</CourseLink>
      </h2>
      <ImageWrapper>
        <Image {...imageProps} />
      </ImageWrapper>
      {children}
    </Section>
  );
};
