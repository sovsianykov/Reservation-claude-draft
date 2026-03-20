import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import HotelFilterSidebar from './HotelFilterSidebar';

const meta: Meta<typeof HotelFilterSidebar> = {
  title: 'Components/HotelFilterSidebar',
  component: HotelFilterSidebar,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0d1117' }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '385px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HotelFilterSidebar>;

export const Default: Story = {};

export const WithCallbacks: Story = {
  args: {
    onClear: () => console.log('cleared'),
    onHotelNameChange: (name) => console.log('hotel name:', name),
    onRatingChange: (ratings) => console.log('ratings:', ratings),
    onGuestReviewChange: (min, max) => console.log('review range:', min, max),
    onPropertyTypeChange: (type) => console.log('property type:', type),
    onAmenitiesChange: (amenities) => console.log('amenities:', amenities),
  },
};
