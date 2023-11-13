import styled from '@emotion/styled';

export interface FeedbackProps {
  isValid?: boolean;
}

export const Feedback = styled.span<FeedbackProps>`
  color: ${({ isValid, theme }) =>
    isValid ? theme.font.valid : theme.font.invalid};
`;
