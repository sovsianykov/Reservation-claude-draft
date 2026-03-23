import SmallBadge, { SmallBadgeVariant } from '@/components/SmallBadge/SmallBadge';
import styles from './page.module.scss';

const variants: { variant: SmallBadgeVariant; label: string }[] = [
    { variant: 'outline-red', label: 'Outline Red' },
    { variant: 'warning', label: 'Warning' },
    { variant: 'grey', label: 'Grey' },
    { variant: 'success', label: 'Success' },
    { variant: 'danger', label: 'Danger' },
    { variant: 'badge-info-light', label: 'Info Light' },
];

export default function SmallBadgesPreviewPage() {
    return (
        <main className={styles.page}>
            <h1 className={styles.page__title}>SmallBadge — All Variants</h1>

            <section className={styles.page__section}>
                <h2 className={styles.page__subtitle}>With Icon</h2>
                <div className={styles.page__row}>
                    {variants.map(({ variant, label }) => (
                        <div key={variant} className={styles.page__item}>
                            <SmallBadge variant={variant} label={label} hasIcon />
                            <span className={styles.page__name}>{variant}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.page__section}>
                <h2 className={styles.page__subtitle}>Without Icon</h2>
                <div className={styles.page__row}>
                    {variants.map(({ variant, label }) => (
                        <div key={variant} className={styles.page__item}>
                            <SmallBadge variant={variant} label={label} hasIcon={false} />
                            <span className={styles.page__name}>{variant}</span>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
