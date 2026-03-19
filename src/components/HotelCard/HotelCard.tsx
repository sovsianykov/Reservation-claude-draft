import { FC } from 'react';
import Image from 'next/image';
import Icon from '@/shared/Icon/Icon';
import styles from './HotelCard.module.scss';

export interface HotelCardProps {
  hotelName: string;
  country: string;
  address: string;
  rating: number;
  reviewCount: number;
  amenities: string[];
  originalPrice: number;
  discountedPrice: number;
  savings: number;
  imageUrl: string;
  isMemberExclusive?: boolean;
  bookingUrl?: string;
}

const HotelCard: FC<HotelCardProps> = ({
  hotelName,
  country,
  address,
  rating,
  reviewCount,
  amenities,
  originalPrice,
  discountedPrice,
  savings,
  imageUrl,
  isMemberExclusive = false,
  bookingUrl = '#',
}) => {
  return (
    <div className={styles['hotel-card']}>
      <div className={styles['hotel-card__image-wrapper']}>
        <Image
          src={imageUrl}
          alt={hotelName}
          fill
          className={styles['hotel-card__image']}
          sizes="(max-width: 425px) 100vw, 385px"
        />
        {isMemberExclusive && (
          <span className={styles['hotel-card__member-badge']}>Member Exclusive</span>
        )}
      </div>

      <div className={styles['hotel-card__content']}>
        <h2 className={styles['hotel-card__title']}>{hotelName}</h2>

        <div className={styles['hotel-card__country']}>
          <Icon type="globe" width={14} height={14} className={styles['hotel-card__icon']} />
          <span className={styles['hotel-card__country-text']}>{country}</span>
        </div>

        <div className={styles['hotel-card__address']}>
          <Icon type="locationPin" width={14} height={16} className={styles['hotel-card__icon']} />
          <span className={styles['hotel-card__address-text']}>{address}</span>
        </div>

        <div className={styles['hotel-card__rating']}>
          <span className={styles['hotel-card__star']}>★</span>
          <span className={styles['hotel-card__rating-value']}>{rating}</span>
          <span className={styles['hotel-card__review-count']}>({reviewCount.toLocaleString()} reviews)</span>
        </div>

        <div className={styles['hotel-card__amenities']}>
          {amenities.map((amenity) => (
            <span key={amenity} className={styles['hotel-card__amenity']}>
              {amenity}
            </span>
          ))}
        </div>

        <hr className={styles['hotel-card__divider']} />

        <div className={styles['hotel-card__footer']}>
          <a href={bookingUrl} className={styles['hotel-card__book-btn']}>
            <span>Book Now</span>
            <Icon type="arrowRight" width={18} height={17} className={styles['hotel-card__btn-icon']} />
          </a>

          <div className={styles['hotel-card__pricing']}>
            <span className={styles['hotel-card__savings-badge']}>
              <Icon type="tag" width={14} height={14} className={styles['hotel-card__tag-icon']} />
              You Save ${savings}
            </span>
            <div className={styles['hotel-card__prices']}>
              <span className={styles['hotel-card__original-price']}>${originalPrice}</span>
              <span className={styles['hotel-card__discounted-price']}>${discountedPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
