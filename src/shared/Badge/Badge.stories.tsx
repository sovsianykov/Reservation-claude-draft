import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';
import Icon from '../Icon/Icon';

const meta: Meta<typeof Badge> = {
    title: 'Shared/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['success', 'warning', 'info'],
        },
        label: { control: 'text' },
        hasIcon: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Success: Story = {
    args: {
        label: 'Add text here',
        variant: 'success',
        hasIcon: true,
        icon: <Icon type="dollarBag" width={19} height={20} />,
    },
};

export const Warning: Story = {
    args: {
        label: 'Add text here',
        variant: 'warning',
        hasIcon: true,
        icon: <Icon type="secureLock" width={23} height={20} />,
    },
};

export const Info: Story = {
    args: {
        label: 'Add text here',
        variant: 'info',
        hasIcon: true,
        icon: <Icon type="verified" width={18} height={18} />,
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <Badge label="Add text here" variant="success" hasIcon icon={<Icon type="dollarBag" width={19} height={20} />} />
            <Badge label="Add text here" variant="warning" hasIcon icon={<Icon type="secureLock" width={23} height={20} />} />
            <Badge label="Add text here" variant="info" hasIcon icon={<Icon type="verified" width={18} height={18} />} />
        </div>
    ),
};
