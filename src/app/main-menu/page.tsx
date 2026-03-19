'use client';
import MainMenu from '@/components/MainMenu/MainMenu';
import styles from './page.module.scss';

export default function MainMenuPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.page__title}>Main Menu Component</h1>
      <p className={styles.page__description}>
        Click a menu item to set it as active. Icons and labels change color based on state.
      </p>
      <section className={styles.page__section}>
        <h2 className={styles.page__subtitle}>With active item (interactive)</h2>
        <div className={styles.page__demo}>
          <MainMenu defaultActiveId="hotels" />
        </div>
      </section>
    </div>
  );
}
