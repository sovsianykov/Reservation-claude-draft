import HomeMembershipCard from '@/containers/HomeMembershipCard/HomeMembershipCard';
import styles from './page.module.scss';

export default function HomeMembershipCardPage() {
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Membership Card</h1>
        <p className={styles.subtitle}>Three membership tiers — Classic, Plus, and Premium</p>
      </div>
      <div className={styles.grid}>
        <HomeMembershipCard membershipCardType="classic" />
        <HomeMembershipCard membershipCardType="plus" />
        <HomeMembershipCard membershipCardType="premium" />
      </div>
    </main>
  );
}
