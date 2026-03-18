import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
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
type Story = StoryObj<typeof RadioButton>;

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
        <RadioButton checked={checked} onChange={setChecked} aria-label="Toggle option" />
        <span style={{ color: '#fff', fontSize: '14px' }}>
          {checked ? 'Selected' : 'Unselected'}
        </span>
      </div>
    );
  },
};

export const BothStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <RadioButton checked={false} aria-label="Unchecked example" />
      <RadioButton checked={true} aria-label="Checked example" />
    </div>
  ),
};
