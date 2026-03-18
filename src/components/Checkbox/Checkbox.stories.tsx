import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0d0d1a' }],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const WithLocalState: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Checkbox checked={checked} onChange={setChecked} aria-label="Toggle option" />
        <span style={{ color: '#fff', fontSize: '14px' }}>
          {checked ? 'Checked' : 'Unchecked'}
        </span>
      </div>
    );
  },
};

export const BothStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Checkbox checked={false} aria-label="Unchecked example" />
      <Checkbox checked={true} aria-label="Checked example" />
    </div>
  ),
};
