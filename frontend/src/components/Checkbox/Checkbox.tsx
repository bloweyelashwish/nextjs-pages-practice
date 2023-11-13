import { FC, ChangeEvent } from 'react';
import styled from '@emotion/styled';

import { boxShadow, transition } from '~/styles/common';
import { useId } from '~/hooks/useId';

const CheckboxWrapper = styled.div`
  & input {
    display: none;

    &:checked {
      & ~ label {
        ${({ theme }) =>
          boxShadow(theme.components.shadow1, theme.components.shadow2, true)};
        color: ${({ theme }) => theme.font.regular};
      }
    }
  }
`;
const VisiblePart = styled.label`
  font-size: 1.8rem;
  display: inline-block;
  user-select: none;
  cursor: pointer;
  text-align: center;
  border-radius: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  color: rgba(0, 0, 0, 0);

  background: ${({ theme }) => theme.components.background};

  ${transition()};
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)};

  &:hover {
    ${({ theme }) =>
      boxShadow(theme.components.shadow1, theme.components.shadow2, true)};
  }
`;

interface CheckboxProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ onChange }) => {
  const fieldId = useId();

  return (
    <CheckboxWrapper>
      <input id={fieldId} type="checkbox" onChange={onChange} />
      <VisiblePart htmlFor={fieldId}>&#10003;</VisiblePart>
    </CheckboxWrapper>
  );
};
