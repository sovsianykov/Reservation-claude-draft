import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import DaysCounter from './DaysCounter';
import StoryContainer from '@/shared/StoryContainer/StoryContainer';

const meta: Meta<typeof DaysCounter> = {
  title: 'Components/DaysCounter',
  component: DaysCounter,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0d0d1a' }],
    },
  },
  argTypes: {
    days: {
      control: { type: 'number', min: 0, max: 365 },
      description: 'Number of days to display',
    },
    maxDays: {
      control: { type: 'number', min: 1, max: 365 },
      description: 'Maximum number of days (used to calculate arc progress)',
    },
  },
  decorators: [
    (Story) => (
      <StoryContainer defaultTheme="dark">
        <Story />
      </StoryContainer>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DaysCounter>;

export const Default: Story = {
  args: {
    days: 4,
    maxDays: 30,
  },
};

export const Quarter: Story = {
  args: {
    days: 7,
    maxDays: 30,
  },
};

export const Half: Story = {
  args: {
    days: 15,
    maxDays: 30,
  },
};

export const ThreeQuarters: Story = {
  args: {
    days: 22,
    maxDays: 30,
  },
};

export const Full: Story = {
  args: {
    days: 30,
    maxDays: 30,
  },
};

export const LongTrip: Story = {
  args: {
    days: 45,
    maxDays: 90,
  },
};
