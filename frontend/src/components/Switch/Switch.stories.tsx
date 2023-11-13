import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen, userEvent } from '@storybook/testing-library';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  tags: ['autodocs'],
  title: 'Controls/Switch',
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const BasicSwitch: Story = {
  play: async ({ args }) => {
    await userEvent.click(screen.getByTestId('SwitchVisiblePart'));
    expect(args.onChange).toHaveBeenCalled();
  },
  args: {},
};
