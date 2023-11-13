import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen, userEvent } from '@storybook/testing-library';

import { Feedback } from './Feedback';

const meta: Meta<typeof Feedback> = {
  tags: ['autodocs'],
  title: 'Controls/Feedback',
  component: Feedback,
};

export default meta;

type Story = StoryObj<typeof Feedback>;

export const ValidFeedback: Story = {
  play: () => {
    expect(screen.getByText('Looks good!')).toBeInTheDocument();
  },
  args: {
    isValid: true,
    children: 'Looks good!',
  },
};

export const InvalidFeedback: Story = {
  play: () => {
    expect(
      screen.getByText('Please provide a valid value')
    ).toBeInTheDocument();
  },
  args: {
    isValid: false,
    children: 'Please provide a valid value',
  },
};
