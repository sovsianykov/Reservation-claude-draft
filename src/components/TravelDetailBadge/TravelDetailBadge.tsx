import { FC } from 'react';
import { Icon } from '@/shared/Icon/Icon';
import styles from './TravelDetailBadge.module.scss';

export interface TravelDetailBadgeProps {
    from: string;
    to: string;
    className?: string;
}

const TravelDetailBadge: FC<TravelDetailBadgeProps> = ({ from, to, className }) => {
    return (
        <div className={`${styles['travel-detail-badge']} ${className ?? ''}`}>
            <div className={styles['travel-detail-badge__route']}>
                <span className={styles['travel-detail-badge__code']}>{from}</span>
                <Icon
                    type="flight"
                    width={13}
                    height={13}
                    className={styles['travel-detail-badge__icon']}
                    role="presentation"
                />
                <span className={styles['travel-detail-badge__code']}>{to}</span>
            </div>
        </div>
    );
};

export default TravelDetailBadge;
