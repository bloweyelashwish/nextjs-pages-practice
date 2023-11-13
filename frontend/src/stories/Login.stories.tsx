import { Meta, StoryObj } from '@storybook/react';

import Login from '../pages/login';

const meta: Meta<typeof Login> = {
  tags: ['autodocs'],
  title: 'Pages/Login',
  component: Login,
};

export default meta;

type Story = StoryObj<typeof Login>;

export const LoginPage: Story = {};
