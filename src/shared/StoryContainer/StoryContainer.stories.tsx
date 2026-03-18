import type { Meta, StoryObj } from '@storybook/react';
import StoryContainer from './StoryContainer';

const meta: Meta<typeof StoryContainer> = {
    title: 'Shared/StoryContainer',
    component: StoryContainer,
    tags: ['autodocs'],
    argTypes: {
        defaultTheme: {
            control: 'radio',
            options: ['light', 'dark'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof StoryContainer>;

export const Light: Story = {
    args: {
        defaultTheme: 'light',
        children: <p>Your story content goes here</p>,
    },
};

export const Dark: Story = {
    args: {
        defaultTheme: 'dark',
        children: <p>Your story content goes here</p>,
    },
};
