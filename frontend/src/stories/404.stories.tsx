import { Meta, StoryObj } from '@storybook/react';

import Error404 from '../pages/404';

const meta: Meta<typeof Error404> = {
  tags: ['autodocs'],
  title: 'Pages/Error404',
  component: Error404,
};

export default meta;

type Story = StoryObj<typeof Error404>;

export const Error404Page: Story = {};
