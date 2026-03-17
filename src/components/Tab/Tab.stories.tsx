import type { Meta, StoryObj } from '@storybook/react';
import Tab from './Tab';

const meta: Meta<typeof Tab> = {
    title: 'Components/Tab',
    component: Tab,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        active: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Active: Story = {
    args: {
        label: 'Text here',
        active: true,
    },
};

export const Inactive: Story = {
    args: {
        label: 'Text here',
        active: false,
    },
};
