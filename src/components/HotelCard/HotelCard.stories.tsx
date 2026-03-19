import type { Meta, StoryObj } from '@storybook/react';
import HotelCard from './HotelCard';

const meta: Meta<typeof HotelCard> = {
  title: 'Components/HotelCard',
  component: HotelCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof HotelCard>;

const defaultArgs = {
  hotelName: 'Grand Luxury Resort & Spa',
  country: 'New York, US',
  address: '130 E 57th St, 10022',
  rating: 4.8,
  reviewCount: 2354,
  amenities: ['Wifi', 'Pool', 'Parking'],
  originalPrice: 299,
  discountedPrice: 230,
  savings: 69,
  imageUrl: 'https://www.figma.com/api/mcp/asset/e7b13bb2-1d8b-4d33-a16a-fb8c06deea78',
  isMemberExclusive: true,
  bookingUrl: '#',
};

export const Default: Story = {
  args: defaultArgs,
};

export const NoMemberBadge: Story = {
  args: {
    ...defaultArgs,
    isMemberExclusive: false,
  },
};

export const HighSavings: Story = {
  args: {
    ...defaultArgs,
    originalPrice: 599,
    discountedPrice: 399,
    savings: 200,
  },
};
