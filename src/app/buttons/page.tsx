"use client"
import IconButton, {
  IconButtonVariant,
  IconButtonIconPosition,
} from '@/components/IconButton/IconButton';
import styles from './page.module.scss';

const variants: IconButtonVariant[] = [
  'gradient',
  'secondary',
  'white',
  'outline-grey',
  'outline-info',
  'outline-white',
];

const iconPositions: IconButtonIconPosition[] = ['right', 'left', 'none'];

export default function FigmaPreviewPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>IconButton — All Variants</h1>

      {/* Light background section */}
      <section className={`${styles.section} ${styles['section--light']}`}>
        <h2 className={styles.section__heading}>Light background</h2>
        {iconPositions.map((pos) => (
          <div key={pos} className={styles.row}>
            <span className={styles.row__label}>icon: {pos}</span>
            {variants.map((v) => (
              <IconButton
                key={v}
                label="Button"
                variant={v}
                iconPosition={pos}
              />
            ))}
          </div>
        ))}
      </section>

      {/* Dark background section */}
      <section className={`${styles.section} ${styles['section--dark']}`}>
        <h2 className={styles.section__heading}>Dark background</h2>
        {iconPositions.map((pos) => (
          <div key={pos} className={styles.row}>
            <span className={styles.row__label}>icon: {pos}</span>
            {variants.map((v) => (
              <IconButton
                key={v}
                label="Button"
                variant={v}
                iconPosition={pos}
              />
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}
