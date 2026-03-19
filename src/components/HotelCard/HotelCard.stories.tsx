import type { Meta, StoryObj } from '@storybook/react';
import { HotelCard } from './HotelCard';

const meta: Meta<typeof HotelCard> = {
  title: 'Components/HotelCard',
  component: HotelCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HotelCard>;

const defaultArgs = {
  name: 'Grand Luxury Resort & Spa',
  country: 'New York, US',
  address: '130 E 57th St, 10022',
  rating: 4.8,
  reviewCount: 2354,
  amenities: [
    { label: 'Wifi' },
    { label: 'Pool' },
    { label: 'Parking' },
  ],
  originalPrice: 299,
  discountedPrice: 230,
  savings: 69,
  image: '/images/hotel-grand-luxury.jpg',
  imageAlt: 'Grand Luxury Resort & Spa exterior at night',
  memberExclusive: true,
};

export const Default: Story = {
  args: defaultArgs,
};

export const NoMemberBadge: Story = {
  args: {
    ...defaultArgs,
    memberExclusive: false,
  },
};

export const DifferentHotel: Story = {
  args: {
    ...defaultArgs,
    name: 'The Grand Plaza Hotel',
    country: 'Paris, FR',
    address: '15 Rue de la Paix, 75001',
    rating: 4.6,
    reviewCount: 1870,
    amenities: [
      { label: 'Spa' },
      { label: 'Gym' },
      { label: 'Pool' },
      { label: 'Wifi' },
    ],
    originalPrice: 450,
    discountedPrice: 369,
    savings: 81,
    memberExclusive: false,
  },
};
