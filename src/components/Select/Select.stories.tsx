import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [{ name: 'light', value: '#ffffff' }],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
};

export const WithSelectedValue: Story = {
  args: {
    value: 'rating',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Filter By',
  },
};

export const CustomOptions: Story = {
  args: {
    options: [
      { value: 'a-z', label: 'A to Z' },
      { value: 'z-a', label: 'Z to A' },
      { value: 'date', label: 'Date Added' },
    ],
    placeholder: 'Order By',
  },
};
