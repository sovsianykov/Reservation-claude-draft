import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0d0d1a' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    iconLeft: { control: 'boolean' },
    iconRight: { control: 'boolean' },
    showCheckIcon: { control: 'boolean' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your email',
    iconLeft: true,
    iconRight: true,
    showCheckIcon: false,
  },
};

export const WithCheckIcon: Story = {
  args: {
    placeholder: 'Enter your email',
    iconLeft: true,
    iconRight: true,
    showCheckIcon: true,
  },
};

export const NoIcons: Story = {
  args: {
    placeholder: 'Enter your email',
    iconLeft: false,
    iconRight: false,
    showCheckIcon: false,
  },
};

export const IconLeftOnly: Story = {
  args: {
    placeholder: 'Enter your email',
    iconLeft: true,
    iconRight: false,
    showCheckIcon: false,
  },
};
