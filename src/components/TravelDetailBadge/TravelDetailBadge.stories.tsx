import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TravelDetailBadge from './TravelDetailBadge';

const meta: Meta<typeof TravelDetailBadge> = {
    title: 'Components/TravelDetailBadge',
    component: TravelDetailBadge,
    tags: ['autodocs'],
    argTypes: {
        from: { control: 'text' },
        to: { control: 'text' },
    },
    decorators: [
        (Story) => (
            <div style={{ background: '#2e3347', padding: '40px', display: 'inline-block' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof TravelDetailBadge>;

export const Default: Story = {
    args: {
        from: 'TPA',
        to: 'LGW',
    },
};

export const DomesticFlight: Story = {
    args: {
        from: 'JFK',
        to: 'LAX',
    },
};

export const ShortCodes: Story = {
    args: {
        from: 'SFO',
        to: 'ORD',
    },
};
