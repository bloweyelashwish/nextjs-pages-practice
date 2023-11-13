import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen } from '@storybook/testing-library';

import { CenteredTile } from './CenteredTile';

const meta: Meta<typeof CenteredTile> = {
  tags: ['autodocs'],
  title: 'Content/Tile',
  component: CenteredTile,
};

export default meta;

type Story = StoryObj<typeof CenteredTile>;

export const BasicCenteredTile: Story = {
  play: () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
  },
  args: {
    header: 'Basic Centered Tile',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quasi impedit corrupti totam quas tenetur voluptas, unde similique ipsam ad?',
  },
};
