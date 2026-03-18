'use client';
import { useState } from 'react';
import ToggleButton from '@/components/ToggleButton/ToggleButton';
import styles from './page.module.scss';

export default function ToggleButtonPage() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(true);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Toggle Button</h1>
      <p className={styles.description}>A button that toggles between plus and minus icons.</p>

      <section className={styles.section}>
        <h2 className={styles['section-title']}>Interactive</h2>
        <div className={styles.row}>
          <div className={styles.item}>
            <ToggleButton active={active1} onClick={() => setActive1((v) => !v)} aria-label="Toggle 1" />
            <span className={styles.label}>{active1 ? 'Active' : 'Inactive'}</span>
          </div>
          <div className={styles.item}>
            <ToggleButton active={active2} onClick={() => setActive2((v) => !v)} aria-label="Toggle 2" />
            <span className={styles.label}>{active2 ? 'Active' : 'Inactive'}</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles['section-title']}>States</h2>
        <div className={styles.row}>
          <div className={styles.item}>
            <ToggleButton active={false} aria-label="Inactive state" />
            <span className={styles.label}>Default (plus)</span>
          </div>
          <div className={styles.item}>
            <ToggleButton active={true} aria-label="Active state" />
            <span className={styles.label}>Active (minus)</span>
          </div>
        </div>
      </section>
    </div>
  );
}
