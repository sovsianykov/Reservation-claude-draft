import PremiumBadge from '@/components/PremiumBadge/PremiumBadge';
import styles from './page.module.scss';

export default function FigmaPreviewPage() {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>PremiumBadge Preview</h1>
            <PremiumBadge renewsDate="11/26/2026" />
        </main>
    );
}
