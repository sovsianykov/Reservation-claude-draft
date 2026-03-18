import TravelDetailBadge from '@/components/TravelDetailBadge/TravelDetailBadge';
import styles from './page.module.scss';

export default function FigmaPreviewPage() {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>TravelDetailBadge Preview</h1>
            <TravelDetailBadge from="TPA" to="LGW" />
        </main>
    );
}
