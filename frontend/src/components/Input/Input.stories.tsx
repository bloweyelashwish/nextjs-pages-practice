import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen, userEvent } from '@storybook/testing-library';

import { Input } from './Input';
import { Feedback } from './Feedback/Feedback';

const meta: Meta<typeof Input> = {
  tags: ['autodocs'],
  title: 'Controls/Input',
  component: Input,
  args: {
    placeholder: 'Placeholder',
    label: 'Basic Input',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const BasicInput: Story = {
  play: async ({ args }) => {
    await userEvent.type(screen.getByRole('textbox'), 'String');
    expect(args.onChange).toHaveBeenCalledTimes(6);
  },
  args: {
    feedback: 'Input feedback',
  },
};

export const InputWithValidFeedback: Story = {
  args: {
    feedback: <Feedback isValid={true}>Looks ok</Feedback>,
  },
  argTypes: {
    feedback: {
      control: false,
    },
  },
};

export const InputWithInvalidFeedback: Story = {
  args: {
    feedback: <Feedback isValid={false}>Required</Feedback>,
  },
  argTypes: {
    feedback: {
      control: false,
    },
  },
};

export const InputWithIcon: Story = {
  args: {
    icon: 'User',
  },
};
