import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import IconTab from './IconTab';

const meta = {
  title: 'Components/IconTab',
  component: IconTab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: ['addressBook', 'creditCardMultiple'],
    },
    active: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    onClick: fn(),
    label: 'My Credit Cards',
    icon: 'creditCardMultiple',
  },
} satisfies Meta<typeof IconTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'addressBook',
    label: 'My Credit Cards',
    active: false,
  },
};

export const Active: Story = {
  args: {
    icon: 'creditCardMultiple',
    label: 'My Credit Cards',
    active: true,
  },
};
