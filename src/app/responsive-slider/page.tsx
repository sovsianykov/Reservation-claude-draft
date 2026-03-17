'use client';

import ResponsiveRangeSlider from '@/components/ResponsiveRangeSlider/ResponsiveRangeSlider';
import styles from './page.module.scss';

export default function ResponsiveSliderPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Responsive Range Slider</h1>
      <div className={styles.demo}>
        <ResponsiveRangeSlider
          min={0}
          max={10000}
          defaultMinValue={2000}
          defaultMaxValue={6000}
        />
      </div>
    </div>
  );
}
