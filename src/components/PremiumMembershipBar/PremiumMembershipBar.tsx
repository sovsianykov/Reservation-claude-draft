import { FC } from 'react';
import { Icon } from '@/shared/Icon/Icon';
import styles from './PremiumMembershipBar.module.scss';

export interface PremiumMembershipBarProps {
  label?: string;
  buttonText?: string;
  progress?: number; // 0–100
  className?: string;
}

const PremiumMembershipBar: FC<PremiumMembershipBarProps> = ({
  label = '1 Month',
  buttonText = 'Anniversary Gift',
  progress = 60,
  className,
}) => {
  return (
    <div className={`${styles['membership-bar']} ${className ?? ''}`}>
      <div className={styles['membership-bar__wrapper']}>
        <div className={styles['membership-bar__label']}>
          <Icon type="checkFill" width={18} height={18} className={styles['membership-bar__check-icon']} />
          <span className={styles['membership-bar__label-text']}>{label}</span>
        </div>

        <div className={styles['membership-bar__track']} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <div className={styles['membership-bar__fill']} style={{ width: `${progress}%` }} />
        </div>

        <button className={styles['membership-bar__button']} type="button">
          <span className={styles['membership-bar__button-text']}>{buttonText}</span>
          <Icon type="giftOpen" width={18} height={17} className={styles['membership-bar__gift-icon']} />
        </button>
      </div>
    </div>
  );
};

export default PremiumMembershipBar;
