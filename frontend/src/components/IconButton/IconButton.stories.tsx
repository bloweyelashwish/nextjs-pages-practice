import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen, userEvent } from '@storybook/testing-library';

import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  tags: ['autodocs'],
  title: 'Content/IconButton',
  component: IconButton,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const BasicIconButton: Story = {
  play: async ({ args }) => {
    await userEvent.click(screen.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalled();
  },
  args: {
    name: 'Home',
  },
};
