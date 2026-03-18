import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import ToggleButton from './ToggleButton';

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    active: { control: 'boolean' },
    'aria-label': { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  args: {
    active: false,
    'aria-label': 'Toggle',
  },
};

export const Active: Story = {
  args: {
    active: true,
    'aria-label': 'Toggle',
  },
};

export const Inactive: Story = {
  args: {
    active: false,
    'aria-label': 'Toggle',
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [active, setActive] = useState(args.active ?? false);
    return (
      <ToggleButton
        {...args}
        active={active}
        onClick={() => setActive((prev) => !prev)}
      />
    );
  },
  args: {
    active: false,
    'aria-label': 'Toggle item',
  },
};

export const SideBySide: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <ToggleButton active={false} aria-label="Inactive toggle" />
      <ToggleButton active={true} aria-label="Active toggle" />
    </div>
  ),
};
