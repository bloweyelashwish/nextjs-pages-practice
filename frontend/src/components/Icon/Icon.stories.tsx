import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen, userEvent } from '@storybook/testing-library';

import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  tags: ['autodocs'],
  title: 'Content/Icon',
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const BasicIcon: Story = {
  args: {
    name: 'Home',
  },
};
