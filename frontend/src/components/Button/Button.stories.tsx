import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen, userEvent } from '@storybook/testing-library';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Controls/Button',
  tags: ['autodocs'],
  component: Button,
  args: {
    children: 'Button text',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  play: async ({ args }) => {
    await userEvent.click(screen.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalled();
  },
  args: {
    color: 'primary',
  },
};

export const SecondaryButton: Story = {
  ...PrimaryButton,
  args: {
    color: 'secondary',
  },
};

export const WarningButton: Story = {
  ...PrimaryButton,
  args: {
    color: 'warning',
  },
};

export const DangerButton: Story = {
  ...PrimaryButton,
  args: {
    color: 'danger',
  },
};
