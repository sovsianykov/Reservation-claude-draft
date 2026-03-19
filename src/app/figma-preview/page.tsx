import { HotelCard } from '@/components/HotelCard/HotelCard';

export default function FigmaPreviewPage() {
  return (
    <main style={{ padding: '40px', background: '#f5f5f5', minHeight: '100vh', display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
      <HotelCard
        name="Grand Luxury Resort & Spa"
        country="New York, US"
        address="130 E 57th St, 10022"
        rating={4.8}
        reviewCount={2354}
        amenities={[
          { label: 'Wifi' },
          { label: 'Pool' },
          { label: 'Parking' },
        ]}
        originalPrice={299}
        discountedPrice={230}
        savings={69}
        image="/images/hotel-grand-luxury.jpg"
        imageAlt="Grand Luxury Resort & Spa exterior at night"
        memberExclusive={true}
      />
    </main>
  );
}
