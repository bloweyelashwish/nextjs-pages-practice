import { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  tags: ['autodocs'],
  title: 'Content/Logo',
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const BasicLogo: Story = {
  args: {
    children: 'Logo Text',
  },
};
