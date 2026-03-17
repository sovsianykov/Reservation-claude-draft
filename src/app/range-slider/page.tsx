'use client';

import RangeSlider from '@/components/RangeSlider/RangeSlider';
import styles from './page.module.scss';

export default function RangeSliderPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Range Slider</h1>
      <div className={styles.demo}>
        <RangeSlider min={0} max={10} defaultMinValue={0} defaultMaxValue={5} />
      </div>
    </div>
  );
}
