import type {
  FC,
  ChangeEventHandler,
  InputHTMLAttributes,
  ReactNode,
  ForwardedRef,
} from 'react';
import { forwardRef } from 'react';
import styled from '@emotion/styled';

import { boxShadow } from '~/styles/common';
import { useId } from '~/hooks/useId';

import { Icon, AvailableIcons } from '../Icon';

type WrapperProps = {
  height?: number;
  width?: number;
  isLabelVisible?: boolean;
  isFeedbackVisible?: boolean;
};

export type InputProps = {
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  feedback?: ReactNode;
  icon?: AvailableIcons;
} & WrapperProps;

const StyledInput = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  font-size: 1.4rem;
  padding: 0 2.6rem 0 1.4rem;
  color: ${({ theme }) => theme.font.regular};

  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2, true)};

  &::placeholder {
    color: ${({ theme }) => theme.font.placeholder};
  }
  &:focus {
    ${({ theme }) =>
      boxShadow(theme.components.shadow1, theme.components.shadow2)};

    & ~ svg {
      color: ${({ theme }) => theme.font.regular};
      opacity: 1;
    }
  }
`;

const Wrapper = styled.label<WrapperProps>`
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  color: ${({ theme }) => theme.font.regular};
  font-size: 1rem;
  display: grid;
  gap: 0.1rem;
  grid-template-areas:
    'label'
    'input'
    'feedback';
  grid-template-rows: ${({ isLabelVisible, isFeedbackVisible }) => {
    if (isLabelVisible && isFeedbackVisible) {
      return '1fr 3fr 1fr';
    } else if (isLabelVisible) {
      return '1fr 4fr 0fr';
    } else if (isFeedbackVisible) {
      return '0fr 4fr 1fr';
    } else {
      return '0fr 1fr 0fr';
    }
  }};
`;

const Label = styled.span`
  grid-area: label;
  padding-left: 1.4rem;
`;

const Feedback = styled(Label)`
  padding-left: 1.4rem;
  grid-area: feedback;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 0.3rem;
  margin-left: -2.5rem;
  color: ${({ theme }) => theme.font.placeholder};
  opacity: 0.7;
`;

const InputWrapper = styled.span`
  grid-area: input;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input: FC<InputProps & InputHTMLAttributes<HTMLInputElement>> =
  forwardRef(
    ({ label, height, width, className, feedback, icon, ...rest }, ref) => {
      const fieldId = useId();

      return (
        <Wrapper
          htmlFor={fieldId}
          height={height}
          width={width}
          className={className}
          isLabelVisible={Boolean(label)}
          isFeedbackVisible={Boolean(feedback)}
        >
          <Label>{label}</Label>
          <InputWrapper>
            <StyledInput
              {...rest}
              id={fieldId}
              ref={ref as ForwardedRef<HTMLInputElement>}
            />
            {icon && <StyledIcon name={icon} />}
          </InputWrapper>
          <Feedback>{feedback}</Feedback>
        </Wrapper>
      );
    }
  );

Input.displayName = 'Input';
