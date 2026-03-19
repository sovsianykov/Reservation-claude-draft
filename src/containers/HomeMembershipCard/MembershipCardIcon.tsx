import { FC } from 'react';
import Image from 'next/image';
import styles from './HomeMembershipCard.module.scss';

export type MembershipCardType = 'classic' | 'plus' | 'premium';

const ICON_CONFIG: Record<MembershipCardType, { src: string; gradientFrom: string; gradientTo: string }> = {
  classic: {
    src: '/icons/classic-membership.svg',
    gradientFrom: '#f0b100',
    gradientTo: '#f5e7d3',
  },
  plus: {
    src: '/icons/plus-membership.svg',
    gradientFrom: '#fb2c36',
    gradientTo: '#f0b100',
  },
  premium: {
    src: '/icons/premium-membership.svg',
    gradientFrom: '#4501e8',
    gradientTo: '#7d00fc',
  },
};

export interface MembershipCardIconProps {
  membershipCardType: MembershipCardType;
}

const MembershipCardIcon: FC<MembershipCardIconProps> = ({ membershipCardType }) => {
  const { src, gradientFrom, gradientTo } = ICON_CONFIG[membershipCardType];

  return (
    <div
      className={styles['membership-card__icon-container']}
      style={{ background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)` }}
    >
      <Image
        src={src}
        alt={`${membershipCardType} membership`}
        width={36}
        height={36}
        className={styles['membership-card__icon']}
      />
    </div>
  );
};

export default MembershipCardIcon;
