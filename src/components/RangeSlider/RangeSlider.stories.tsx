import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import RangeSlider from './RangeSlider';

const meta: Meta<typeof RangeSlider> = {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1a1a2e' }],
    },
  },
  args: {
    onChange: fn(),
  },
  argTypes: {
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    defaultMinValue: { control: { type: 'number' } },
    defaultMaxValue: { control: { type: 'number' } },
  },
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
  args: {
    min: 0,
    max: 10,
  },
};

export const CustomRange: Story = {
  args: {
    min: 0,
    max: 100,
    defaultMinValue: 20,
    defaultMaxValue: 80,
  },
};

export const NarrowSelection: Story = {
  args: {
    min: 0,
    max: 100,
    defaultMinValue: 45,
    defaultMaxValue: 55,
  },
};

export const FullRange: Story = {
  args: {
    min: 0,
    max: 100,
    defaultMinValue: 0,
    defaultMaxValue: 100,
  },
};

export const PriceRange: Story = {
  args: {
    min: 0,
    max: 1000,
    defaultMinValue: 100,
    defaultMaxValue: 500,
  },
};
