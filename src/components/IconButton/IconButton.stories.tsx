import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import IconButton from './IconButton';
import Icon from '@/shared/Icon/Icon';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['gradient', 'secondary', 'white', 'outline-grey', 'outline-info', 'outline-white'],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right', 'none'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    onClick: fn(),
    label: 'Search',
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'gradient',
    iconPosition: 'right',
    label: 'Search',
  },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    iconPosition: 'right',
    label: 'Search',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    iconPosition: 'right',
    label: 'Search',
  },
};

export const White: Story = {
  args: {
    variant: 'white',
    iconPosition: 'right',
    label: 'Search',
  },
};

export const OutlineGrey: Story = {
  args: {
    variant: 'outline-grey',
    iconPosition: 'right',
    label: 'Search',
  },
};

export const OutlineInfo: Story = {
  args: {
    variant: 'outline-info',
    iconPosition: 'right',
    label: 'Search',
  },
};

export const OutlineWhite: Story = {
  args: {
    variant: 'outline-white',
    iconPosition: 'right',
    label: 'Search',
  },
};

export const ViewOnMap: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    variant: 'outline-white',
    iconPosition: 'right',
    label: 'View On Map',
    icon: <Icon type="poiMap" width={18} height={17} role="presentation" />,
  },
};

export const IconLeft: Story = {
  args: {
    variant: 'gradient',
    iconPosition: 'left',
    label: 'Search',
  },
};

export const NoIcon: Story = {
  args: {
    variant: 'gradient',
    iconPosition: 'none',
    label: 'Search',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'gradient',
    iconPosition: 'right',
    label: 'Search',
    disabled: true,
  },
};
