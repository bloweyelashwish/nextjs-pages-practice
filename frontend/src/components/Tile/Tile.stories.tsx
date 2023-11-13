import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen } from '@storybook/testing-library';

import { Tile } from './Tile';

const meta: Meta<typeof Tile> = {
  tags: ['autodocs'],
  title: 'Content/Tile',
  component: Tile,
};

export default meta;

type Story = StoryObj<typeof Tile>;

export const BasicTile: Story = {
  play: () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
  },
  args: {
    header: 'Basic Tile',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quasi impedit corrupti totam quas tenetur voluptas, unde similique ipsam ad?',
  },
};
