import type { Meta, StoryObj } from '@storybook/react';
import StepContainer from './StepContainer';

const meta: Meta<typeof StepContainer> = {
  title: 'Components/StepContainer',
  component: StepContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    stepNumber: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Step number displayed in the title',
    },
    description: {
      control: 'text',
      description: 'Body text describing the step',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StepContainer>;

export const Default: Story = {
  args: {
    stepNumber: 1,
    description:
      "Pick the plan that fits your style — whether you're a casual explorer or a frequent flyer, there's a membership for you.",
  },
};

export const Step2: Story = {
  args: {
    stepNumber: 2,
    description:
      'Complete your registration and verify your identity to unlock exclusive member benefits worldwide.',
  },
};

export const Step3: Story = {
  args: {
    stepNumber: 3,
    description:
      'Start enjoying premium perks, discounted rates, and priority access at thousands of hotels globally.',
  },
};

export const ShortDescription: Story = {
  args: {
    stepNumber: 1,
    description: 'Choose your membership plan.',
  },
};

export const LongDescription: Story = {
  args: {
    stepNumber: 4,
    description:
      'After completing all the required steps, you will gain full access to our global network of premium hotels, resorts, and exclusive travel experiences curated for our most valued members.',
  },
};
