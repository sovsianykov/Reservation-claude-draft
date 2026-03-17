import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import ResponsiveRangeSlider from './ResponsiveRangeSlider';

const meta: Meta<typeof ResponsiveRangeSlider> = {
  title: 'Components/ResponsiveRangeSlider',
  component: ResponsiveRangeSlider,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'black',
      values: [{ name: 'black', value: '#0d0d1a' }],
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
type Story = StoryObj<typeof ResponsiveRangeSlider>;

export const Default: Story = {
  args: {
    min: 0,
    max: 10000,
    defaultMinValue: 2000,
    defaultMaxValue: 6000,
  },
};

export const FullRange: Story = {
  args: {
    min: 0,
    max: 10000,
    defaultMinValue: 0,
    defaultMaxValue: 10000,
  },
};

export const NarrowSelection: Story = {
  args: {
    min: 0,
    max: 10000,
    defaultMinValue: 4500,
    defaultMaxValue: 5500,
  },
};

export const LowBudget: Story = {
  args: {
    min: 0,
    max: 10000,
    defaultMinValue: 0,
    defaultMaxValue: 2000,
  },
};
