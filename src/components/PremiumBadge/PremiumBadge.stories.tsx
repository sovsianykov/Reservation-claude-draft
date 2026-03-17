import type { Meta, StoryObj } from '@storybook/react';
import PremiumBadge from './PremiumBadge';

const meta: Meta<typeof PremiumBadge> = {
    title: 'Components/PremiumBadge',
    component: PremiumBadge,
    tags: ['autodocs'],
    argTypes: {
        renewsDate: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof PremiumBadge>;

export const Default: Story = {
    args: {
        renewsDate: '11/26/2026',
    },
};

export const DifferentDate: Story = {
    args: {
        renewsDate: '03/15/2027',
    },
};
