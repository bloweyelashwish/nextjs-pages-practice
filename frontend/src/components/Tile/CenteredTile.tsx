import { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Tile, TileProps } from './Tile';

const generalStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TileWrapper = styled.div`
  ${generalStyles};
  flex-flow: column;
`;

const StyledTile = styled(Tile)`
  ${generalStyles};
  flex-flow: column;
`;

export const CenteredTile: FC<TileProps> = ({ children, header, ...rest }) => {
  return (
    <TileWrapper {...rest}>
      <StyledTile header={header}>{children}</StyledTile>
    </TileWrapper>
  );
};
