'use client';
import HomeSearch from '@/components/HomeSearch/HomeSearch';
import styles from './page.module.scss';

export default function HomeSearchPage() {
  return (
    <div className={styles.page}>
      <p className={styles.label}>Default</p>
      <HomeSearch onSearch={() => alert('Searching...')} />

      <p className={styles.label}>Custom Content</p>
      <HomeSearch
        title="Find your perfect stay"
        subtitle="Search thousands of hotels at exclusive member rates"
        location="Paris, France"
        checkIn="15/06/2025"
        checkOut="20/06/2025"
        guests="2 guests, 1 room"
        onSearch={() => alert('Searching...')}
      />
    </div>
  );
}
