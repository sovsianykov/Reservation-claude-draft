import { Badge } from '@/shared/Badge/Badge';
import Icon from '@/shared/Icon/Icon';
import styles from './page.module.scss';

export default function FigmaPreviewPage() {
    return (
        <main className={styles.page}>
            <Badge
                label="Add text here"
                variant="success"
                hasIcon
                icon={<Icon type="dollarBag" width={19} height={20} />}
            />

            <Badge
                label="Add text here"
                variant="warning"
                hasIcon
                icon={<Icon type="secureLock" width={23} height={20} />}
            />

            <Badge
                label="Add text here"
                variant="info"
                hasIcon
                icon={<Icon type="verified" width={18} height={18} />}
            />
        </main>
    );
}
