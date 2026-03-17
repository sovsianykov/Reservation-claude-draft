import type { Meta, StoryObj } from '@storybook/react';
import SmallBadge from './SmallBadge';

const meta: Meta<typeof SmallBadge> = {
    title: 'Shared/SmallBadge',
    component: SmallBadge,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['outline-red', 'warning', 'grey', 'danger', 'success', 'badge-info-light'],
        },
        label: { control: 'text' },
        hasIcon: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof SmallBadge>;

export const OutlineRed: Story = {
    args: {
        variant: 'outline-red',
        label: 'Add text here',
        hasIcon: true,
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        label: 'Add text here',
        hasIcon: true,
    },
};

export const Grey: Story = {
    args: {
        variant: 'grey',
        label: 'Add text here',
        hasIcon: true,
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        label: 'Add text here',
        hasIcon: true,
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        label: 'Add text here',
        hasIcon: true,
    },
};

export const BadgeInfoLight: Story = {
    args: {
        variant: 'badge-info-light',
        label: 'Add text here',
        hasIcon: true,
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', padding: '16px' }}>
            <SmallBadge variant="outline-red" label="Add text here" hasIcon />
            <SmallBadge variant="warning" label="Add text here" hasIcon />
            <SmallBadge variant="success" label="Add text here" hasIcon />
            <SmallBadge variant="grey" label="Add text here" hasIcon />
            <SmallBadge variant="danger" label="Add text here" hasIcon />
            <SmallBadge variant="badge-info-light" label="Add text here" hasIcon />
        </div>
    ),
};

export const WithoutIcons: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', padding: '16px' }}>
            <SmallBadge variant="outline-red" label="Add text here" hasIcon={false} />
            <SmallBadge variant="warning" label="Add text here" hasIcon={false} />
            <SmallBadge variant="success" label="Add text here" hasIcon={false} />
            <SmallBadge variant="grey" label="Add text here" hasIcon={false} />
            <SmallBadge variant="danger" label="Add text here" hasIcon={false} />
            <SmallBadge variant="badge-info-light" label="Add text here" hasIcon={false} />
        </div>
    ),
};
