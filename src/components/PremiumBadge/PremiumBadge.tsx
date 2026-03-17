import { FC } from 'react';
import Icon from '@/shared/Icon/Icon';
import styles from './PremiumBadge.module.scss';

export interface PremiumBadgeProps {
    renewsDate: string;
}

const PremiumBadge: FC<PremiumBadgeProps> = ({ renewsDate }) => {
    return (
        <div className={styles['premium-badge']}>
            <div className={styles['premium-badge__wrapper']}>
                <div className={styles['premium-badge__status-container']}>
                    <div className={styles['premium-badge__status-bg']} />
                    <div className={styles['premium-badge__status']}>
                        <Icon type="verified" width={18} height={18} className={styles['premium-badge__icon']} />
                        <span className={styles['premium-badge__claimed']}>Claimed!</span>
                    </div>
                </div>
                <p className={styles['premium-badge__renews']}>
                    Renews: <strong>{renewsDate}</strong>
                </p>
            </div>
        </div>
    );
};

export default PremiumBadge;
