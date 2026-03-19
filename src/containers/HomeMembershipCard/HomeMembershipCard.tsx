import { FC } from 'react';
import styles from './HomeMembershipCard.module.scss';
import MembershipCardIcon, { MembershipCardType } from './MembershipCardIcon';
import MembershipCardFeatureItem from './MembershipCardFeatureItem';

export interface HomeMembershipCardProps {
  membershipCardType: MembershipCardType;
  title?: string;
  subtitle?: string;
  price?: string;
  priceLabel?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  features?: string[];
  className?: string;
}

const DEFAULTS: Record<MembershipCardType, Omit<Required<HomeMembershipCardProps>, 'membershipCardType' | 'onCtaClick' | 'className'>> = {
  classic: {
    title: 'Classic',
    subtitle: 'Perfect for occasional travelers',
    price: 'Free',
    priceLabel: 'Forever',
    ctaLabel: 'Get Started',
    features: [
      'Hotel Discounts',
      'Ticket Discounts',
      'VIP Service',
      'Personalized Group Travel Support',
      'Bi-Weekly Newsletter',
      'Everyday Savings Discounts on Top Brands and Services',
    ],
  },
  plus: {
    title: 'Plus',
    subtitle: 'Great value for frequent travelers',
    price: '$49',
    priceLabel: '/ Per Year',
    ctaLabel: 'Upgrade Now',
    features: [
      'All Classic benefits',
      '$100 Excursion Credit or Hotel Voucher',
      '1 airport lounge pass or lounge pass discounts',
      'Car Rental Discounts',
      'Cruise Discounts',
    ],
  },
  premium: {
    title: 'Premium',
    subtitle: 'Ultimate experience for luxury travelers',
    price: '$99',
    priceLabel: '/ Per Year',
    ctaLabel: 'Upgrade Now',
    features: [
      'All Classic benefits',
      '$100 Shell Gas Card or Hotel Voucher',
      '4 airport lounge passes or lounge pass discounts',
      'Global Entry with TSA PreCheck',
      'Free International Data Roaming',
      '2 HotelPlanner Tour golf tickets',
      'Private Jet Travel Discounts',
    ],
  },
};

const HomeMembershipCard: FC<HomeMembershipCardProps> = ({
  membershipCardType,
  title,
  subtitle,
  price,
  priceLabel,
  ctaLabel,
  onCtaClick,
  features,
  className,
}) => {
  const defaults = DEFAULTS[membershipCardType];

  const resolvedTitle = title ?? defaults.title;
  const resolvedSubtitle = subtitle ?? defaults.subtitle;
  const resolvedPrice = price ?? defaults.price;
  const resolvedPriceLabel = priceLabel ?? defaults.priceLabel;
  const resolvedCtaLabel = ctaLabel ?? defaults.ctaLabel;
  const resolvedFeatures = features ?? defaults.features;

  return (
    <div className={`${styles['membership-card']} ${styles[`membership-card--${membershipCardType}`]} ${className ?? ''}`}>
      <MembershipCardIcon membershipCardType={membershipCardType} />

      <div className={styles['membership-card__header']}>
        <h3 className={styles['membership-card__title']}>{resolvedTitle}</h3>
        <p className={styles['membership-card__subtitle']}>{resolvedSubtitle}</p>
      </div>

      <div className={styles['membership-card__pricing']}>
        <span className={styles['membership-card__price']}>{resolvedPrice}</span>
        <span className={styles['membership-card__price-label']}>{resolvedPriceLabel}</span>
      </div>

      <button
        className={styles['membership-card__cta']}
        type="button"
        onClick={onCtaClick}
      >
        {resolvedCtaLabel}
      </button>

      <div className={styles['membership-card__features']}>
        <p className={styles['membership-card__features-heading']}>{`What's included:`}</p>
        <ul className={styles['membership-card__features-list']}>
          {resolvedFeatures.map((feature) => (
            <MembershipCardFeatureItem key={feature} label={feature} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeMembershipCard;
