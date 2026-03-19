import { FC } from 'react';
import { Icon, IconType } from '@/shared/Icon/Icon';
import styles from './HomeMembershipCard.module.scss';

export type MembershipCardType = 'classic' | 'plus' | 'premium';

const ICON_CONFIG: Record<MembershipCardType, { iconType: IconType; gradientFrom: string; gradientTo: string }> = {
  classic: {
    iconType: 'classicMembership',
    gradientFrom: '#f0b100',
    gradientTo: '#f5e7d3',
  },
  plus: {
    iconType: 'plusMembership',
    gradientFrom: '#fb2c36',
    gradientTo: '#f0b100',
  },
  premium: {
    iconType: 'premiumMembership',
    gradientFrom: '#4501e8',
    gradientTo: '#7d00fc',
  },
};

export interface MembershipCardIconProps {
  membershipCardType: MembershipCardType;
}

const MembershipCardIcon: FC<MembershipCardIconProps> = ({ membershipCardType }) => {
  const { iconType, gradientFrom, gradientTo } = ICON_CONFIG[membershipCardType];

  return (
    <div
      className={styles['membership-card__icon-container']}
      style={{ background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)` }}
    >
      <Icon
        type={iconType}
        width={36}
        height={36}
        className={styles['membership-card__icon']}
        ariaLabel={`${membershipCardType} membership`}
      />
    </div>
  );
};

export default MembershipCardIcon;
