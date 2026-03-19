'use client';

import Select from '@/components/Select/Select';
import styles from './page.module.scss';

export default function SelectPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Select</h1>

      <div className={styles.grid}>
        <div className={styles.item}>
          <span className={styles.item__label}>Default (placeholder)</span>
          <Select />
        </div>

        <div className={styles.item}>
          <span className={styles.item__label}>Pre-selected value</span>
          <Select value="rating" />
        </div>

        <div className={styles.item}>
          <span className={styles.item__label}>Custom placeholder</span>
          <Select placeholder="Filter By" />
        </div>

        <div className={styles.item}>
          <span className={styles.item__label}>Custom options</span>
          <Select
            placeholder="Order By"
            options={[
              { value: 'a-z', label: 'A to Z' },
              { value: 'z-a', label: 'Z to A' },
              { value: 'date', label: 'Date Added' },
              { value: 'relevance', label: 'Most Relevant' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
