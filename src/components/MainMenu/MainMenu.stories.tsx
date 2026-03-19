import type { Meta, StoryObj } from '@storybook/react';
import MainMenu from './MainMenu';

const meta: Meta<typeof MainMenu> = {
  title: 'Components/MainMenu',
  component: MainMenu,
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
type Story = StoryObj<typeof MainMenu>;

export const Default: Story = {
  args: {},
};

export const WithActiveFlights: Story = {
  args: {
    defaultActiveId: 'flights',
  },
};

export const WithActiveHotels: Story = {
  args: {
    defaultActiveId: 'hotels',
  },
};
