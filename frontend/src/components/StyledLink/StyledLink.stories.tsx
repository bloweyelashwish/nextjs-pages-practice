import { Meta, StoryObj } from '@storybook/react';

import { StyledLink } from './StyledLink';

const meta: Meta<typeof StyledLink> = {
  tags: ['autodocs'],
  title: 'Content/StyledLink',
  component: StyledLink,
};

export default meta;

type Story = StoryObj<typeof StyledLink>;

export const BasicStyledLink: Story = {
  args: {
    children: 'Link Text',
  },
};
