'use client';
import HotelFilterSidebar from '@/components/HotelFilterSidebar/HotelFilterSidebar';
import styles from './page.module.scss';

export default function HotelFilterSidebarPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Hotel Filter Sidebar</h1>
      <p className={styles.description}>
        Filter panel with hotel name search, price range, star ratings, guest reviews, property type, and amenities.
      </p>

      <section className={styles.section}>
        <div className={styles.preview}>
          <HotelFilterSidebar
            onClear={() => console.log('Cleared')}
            onHotelNameChange={(name) => console.log('Hotel name:', name)}
            onPriceChange={(min, max) => console.log('Price:', min, max)}
            onRatingChange={(ratings) => console.log('Ratings:', ratings)}
            onGuestReviewChange={(min, max) => console.log('Guest review:', min, max)}
            onPropertyTypeChange={(type) => console.log('Property type:', type)}
            onAmenitiesChange={(amenities) => console.log('Amenities:', amenities)}
          />
        </div>
      </section>
    </div>
  );
}
