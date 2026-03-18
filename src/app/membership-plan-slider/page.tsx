'use client';

import PremiumMembershipBar from '@/components/PremiumMembershipBar/PremiumMembershipBar';
import styles from './page.module.scss';

export default function FigmaPreviewPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <PremiumMembershipBar
          label="1 Month"
          buttonText="Anniversary Gift"
          progress={60}
        />
      </div>
    </div>
  );
}
