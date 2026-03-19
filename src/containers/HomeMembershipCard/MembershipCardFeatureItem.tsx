import { FC } from 'react';
import { Icon } from '@/shared/Icon/Icon';
import styles from './HomeMembershipCard.module.scss';

export interface MembershipCardFeatureItemProps {
  label: string;
}

const MembershipCardFeatureItem: FC<MembershipCardFeatureItemProps> = ({ label }) => {
  return (
    <li className={styles['membership-card__feature-item']}>
      <span className={styles['membership-card__feature-check']} aria-hidden="true">
        <Icon type="checkCircle" width={12} height={12} className={styles['membership-card__check-icon']} />
      </span>
      <span className={styles['membership-card__feature-label']}>{label}</span>
    </li>
  );
};

export default MembershipCardFeatureItem;
