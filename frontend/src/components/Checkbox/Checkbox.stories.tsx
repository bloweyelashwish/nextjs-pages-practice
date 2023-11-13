import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen, userEvent } from '@storybook/testing-library';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  tags: ['autodocs'],
  title: 'Controls/Checkbox',
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const BasicCheckbox: Story = {
  play: async ({ args }) => {
    await userEvent.click(screen.getByText('✓'));
    expect(args.onChange).toHaveBeenCalled();
  },
  args: {},
};
