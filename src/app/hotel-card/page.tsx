import { HotelCard } from '@/components/HotelCard/HotelCard';
import styles from './page.module.scss';

export default function HotelCardPage() {
  return (
    <div className={styles.page}>
      <div className={styles.heading}>
        <h1>Hotel Card</h1>
        <p>Hotel card component with image, rating, amenities, and booking CTA from Figma designs</p>
      </div>

      <div className={styles.grid}>
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

        <HotelCard
          name="The Grand Plaza Hotel"
          country="Paris, FR"
          address="15 Rue de la Paix, 75001"
          rating={4.6}
          reviewCount={1870}
          amenities={[
            { label: 'Spa' },
            { label: 'Gym' },
            { label: 'Wifi' },
          ]}
          originalPrice={450}
          discountedPrice={369}
          savings={81}
          image="/images/hotel-grand-luxury.jpg"
          imageAlt="The Grand Plaza Hotel"
          memberExclusive={false}
        />
      </div>
    </div>
  );
}
