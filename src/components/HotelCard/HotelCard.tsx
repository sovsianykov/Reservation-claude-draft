import Image from 'next/image';
import { FC } from 'react';
import { SmallBadge } from '@/components/SmallBadge/SmallBadge';
import { Icon } from '@/shared/Icon/Icon';
import styles from './HotelCard.module.scss';

export interface Amenity {
  label: string;
}

export interface HotelCardProps {
  name: string;
  country: string;
  address: string;
  rating: number;
  reviewCount: number;
  amenities: Amenity[];
  originalPrice: number;
  discountedPrice: number;
  savings: number;
  image: string;
  imageAlt?: string;
  memberExclusive?: boolean;
  onBookNow?: () => void;
}

export const HotelCard: FC<HotelCardProps> = ({
  name,
  country,
  address,
  rating,
  reviewCount,
  amenities,
  originalPrice,
  discountedPrice,
  savings,
  image,
  imageAlt = '',
  memberExclusive = false,
  onBookNow,
}) => {
  return (
    <article className={styles['hotel-card']}>
      <div className={styles['hotel-card__image-wrapper']}>
        <Image
          src={image}
          alt={imageAlt || name}
          fill
          className={styles['hotel-card__image']}
          sizes="(max-width: 425px) 100vw, 385px"
        />
        {memberExclusive && (
          <div className={styles['hotel-card__member-badge']}>
            <SmallBadge variant="warning" label="Member Exclusive" hasIcon={false} />
          </div>
        )}
      </div>

      <div className={styles['hotel-card__content']}>
        <h2 className={styles['hotel-card__name']}>{name}</h2>

        <div className={styles['hotel-card__country']}>
          <span className={styles['hotel-card__icon']}>
            <Icon type="world" width={14} height={14} role="presentation" />
          </span>
          <span className={styles['hotel-card__country-text']}>{country}</span>
        </div>

        <div className={styles['hotel-card__address']}>
          <span className={styles['hotel-card__icon']}>
            <Icon type="location" width={14} height={16} role="presentation" />
          </span>
          <span className={styles['hotel-card__address-text']}>{address}</span>
        </div>

        <div className={styles['hotel-card__rating']}>
          <span className={styles['hotel-card__icon']}>
            <Icon type="star" width={14} height={14} role="presentation" />
          </span>
          <span className={styles['hotel-card__rating-value']}>{rating}</span>
          <span className={styles['hotel-card__rating-reviews']}>({reviewCount.toLocaleString()} reviews)</span>
        </div>

        <div className={styles['hotel-card__amenities']}>
          {amenities.map((amenity) => (
            <SmallBadge
              key={amenity.label}
              variant="grey"
              label={amenity.label}
              hasIcon={false}
            />
          ))}
        </div>

        <div className={styles['hotel-card__divider']} role="separator" />

        <div className={styles['hotel-card__footer']}>
          <button
            type="button"
            className={styles['hotel-card__book-btn']}
            onClick={onBookNow}
            aria-label={`Book ${name}`}
          >
            <span>Book Now</span>
            <span className={styles['hotel-card__book-btn-icon']}>
              <Icon type="arrowRight" width={18} height={17} role="presentation" />
            </span>
          </button>

          <div className={styles['hotel-card__pricing']}>
            <SmallBadge variant="outline-red" label={`You Save $${savings}`} hasIcon={true} />
            <div className={styles['hotel-card__price-row']}>
              <span className={styles['hotel-card__original-price']}>${originalPrice}</span>
              <span className={styles['hotel-card__discounted-price']}>${discountedPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HotelCard;
