import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PremiumMembershipBar from './PremiumMembershipBar';

const meta: Meta<typeof PremiumMembershipBar> = {
  title: 'Components/PremiumMembershipBar',
  component: PremiumMembershipBar,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'black',
      values: [{ name: 'black', value: '#000000' }],
    },
  },
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100 } },
  },
};

export default meta;
type Story = StoryObj<typeof PremiumMembershipBar>;

export const Default: Story = {
  args: {
    label: '1 Month',
    buttonText: 'Anniversary Gift',
    progress: 60,
  },
};

export const LowProgress: Story = {
  args: {
    label: '1 Week',
    buttonText: 'Anniversary Gift',
    progress: 15,
  },
};

export const FullProgress: Story = {
  args: {
    label: '1 Year',
    buttonText: 'Claim Reward',
    progress: 100,
  },
};
