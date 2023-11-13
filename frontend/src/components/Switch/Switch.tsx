import { FC, ChangeEvent } from 'react';
import styled from '@emotion/styled';

import { boxShadow, transition } from '~/styles/common';
import { useId } from '~/hooks/useId';

const SwitchWrapper = styled.div`
  & input {
    display: none;

    &:checked {
      & ~ label {
        background: ${({ theme }) => theme.components.primary};

        &::after {
          margin-left: 3.5rem;
          background: ${({ theme }) => theme.components.active};
        }
      }
    }
  }
`;
const VisiblePart = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  height: 3rem;
  width: 6rem;
  border-radius: 1.6rem;
  background: ${({ theme }) => theme.components.background};

  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)};
  ${transition()};

  &::after {
    content: '';
    margin-left: 0.5rem;
    width: 2.1rem;
    height: 2.1rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.components.nonActive};
    ${transition()};
  }
`;

interface SwitchProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Switch: FC<SwitchProps> = ({ onChange }) => {
  const fieldId = useId();

  return (
    <SwitchWrapper>
      <input id={fieldId} type="checkbox" onChange={onChange} />
      <VisiblePart htmlFor={fieldId} data-testid="SwitchVisiblePart" />
    </SwitchWrapper>
  );
};
