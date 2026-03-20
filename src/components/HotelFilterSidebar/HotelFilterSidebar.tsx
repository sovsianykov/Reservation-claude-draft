'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import Checkbox from '@/components/Checkbox/Checkbox';
import RangeSlider from '@/components/RangeSlider/RangeSlider';
import Select, { SelectOption } from '@/components/Select/Select';
import HotelMapView from './HotelMapView/HotelMapView';
import styles from './HotelFilterSidebar.module.scss';

const PROPERTY_TYPE_OPTIONS: SelectOption[] = [
  { value: 'all', label: 'All' },
  { value: 'hotel', label: 'Hotel' },
  { value: 'resort', label: 'Resort' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'hostel', label: 'Hostel' },
];

const AMENITIES = [
  'Free Wifi',
  'Bar',
  'Pets Allowed',
  'Free Parking',
  'Free Breakfast',
  'Meeting Rooms',
  'Gym',
  'Kitchen',
  'Family Friendly',
  'Restaurant',
  'Jacuzzi / Hot Tub',
];

const STAR_RATINGS = [5, 4, 3, 2];

export interface HotelFilterSidebarProps {
  onClear?: () => void;
  onHotelNameChange?: (name: string) => void;
  // onPriceChange?: (min: number, max: number) => void;
  onRatingChange?: (ratings: number[]) => void;
  onGuestReviewChange?: (min: number, max: number) => void;
  onPropertyTypeChange?: (type: string) => void;
  onAmenitiesChange?: (amenities: string[]) => void;
}

const HotelFilterSidebar: FC<HotelFilterSidebarProps> = ({
  onClear,
  onHotelNameChange,
  // onPriceChange,
  onRatingChange,
  onGuestReviewChange,
  onPropertyTypeChange,
  onAmenitiesChange,
}) => {
  const [hotelName, setHotelName] = useState('');
  const [minPrice, setMinPrice] = useState('$0');
  const [maxPrice, setMaxPrice] = useState('$1000+');
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const visibleAmenities = showAllAmenities ? AMENITIES : AMENITIES.slice(0, 11);

  const handleHotelNameChange = (value: string) => {
    setHotelName(value);
    onHotelNameChange?.(value);
  };

  const handleRatingToggle = (star: number) => {
    const next = selectedRatings.includes(star)
      ? selectedRatings.filter((r) => r !== star)
      : [...selectedRatings, star];
    setSelectedRatings(next);
    onRatingChange?.(next);
  };

  const handleAmenityToggle = (amenity: string) => {
    const next = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((a) => a !== amenity)
      : [...selectedAmenities, amenity];
    setSelectedAmenities(next);
    onAmenitiesChange?.(next);
  };

  const handleClear = () => {
    setHotelName('');
    setMinPrice('$0');
    setMaxPrice('$1000+');
    setSelectedRatings([]);
    setSelectedAmenities([]);
    onClear?.();
  };

  const onPriceChange = (min: number, max: number) => {
    setMinPrice(`$${min}`);
    setMaxPrice(max >= 1000 ? '$1000+' : `$${max}`);
  };

  return (
    <div className={styles['hotel-filter-sidebar']}>
      {/* Map */}
      <HotelMapView />

      {/* Filters panel */}
      <div className={styles['hotel-filter-sidebar__filters']}>
        {/* Header */}
        <div className={styles['hotel-filter-sidebar__header']}>
          <div className={styles['hotel-filter-sidebar__header-top']}>
            <h2 className={styles['hotel-filter-sidebar__title']}>Filter</h2>
            <button
              type="button"
              className={styles['hotel-filter-sidebar__clear']}
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
          <hr className={styles['hotel-filter-sidebar__divider']} />
        </div>

        {/* Hotel Name */}
        <div className={styles['hotel-filter-sidebar__section']}>
          <h3 className={styles['hotel-filter-sidebar__section-title']}>Hotel Name</h3>
          <div className={styles['hotel-filter-sidebar__input-wrap']}>
            <input
              className={styles['hotel-filter-sidebar__input']}
              type="text"
              placeholder="Hotel Name"
              value={hotelName}
              onChange={(e) => handleHotelNameChange(e.target.value)}
              aria-label="Hotel Name"
            />
            <span className={styles['hotel-filter-sidebar__input-icon']} aria-hidden="true">
              <Image src="/icons/search.svg" alt="" width={20} height={20} />
            </span>
          </div>
        </div>

        {/* Average Nightly Rate */}
        <div className={styles['hotel-filter-sidebar__section']}>
          <h3 className={styles['hotel-filter-sidebar__section-title']}>Average Nightly Rate</h3>
          <div className={styles['hotel-filter-sidebar__price-row']}>
            <div className={styles['hotel-filter-sidebar__price-col']}>
              <span className={styles['hotel-filter-sidebar__price-label']}>Min</span>
              <div className={styles['hotel-filter-sidebar__input-wrap']}>
                <input
                  className={styles['hotel-filter-sidebar__input']}
                  type="text"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  aria-label="Minimum price"
                />
              </div>
            </div>
            <div className={styles['hotel-filter-sidebar__price-col']}>
              <span className={styles['hotel-filter-sidebar__price-label']}>Max</span>
              <div className={styles['hotel-filter-sidebar__input-wrap']}>
                <input
                  className={styles['hotel-filter-sidebar__input']}
                  type="text"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  aria-label="Maximum price"
                />
              </div>
            </div>
          </div>
          <div className={styles['hotel-filter-sidebar__slider-wrap']}>
            <RangeSlider
              min={0}
              max={1000}
              defaultMinValue={0}
              defaultMaxValue={1000}
              onChange={onPriceChange}
            />
          </div>
        </div>

        {/* Hotel Rating */}
        <div className={styles['hotel-filter-sidebar__section']}>
          <h3 className={styles['hotel-filter-sidebar__section-title']}>Hotel Rating</h3>
          <ul className={styles['hotel-filter-sidebar__rating-list']}>
            {STAR_RATINGS.map((star) => (
              <li key={star} className={styles['hotel-filter-sidebar__rating-item']}>
                <Checkbox
                  checked={selectedRatings.includes(star)}
                  onChange={() => handleRatingToggle(star)}
                  aria-label={`${star} star rating`}
                />
                <div className={styles['hotel-filter-sidebar__stars']}>
                  {Array.from({ length: star }).map((_, i) => (
                    <Image key={i} src="/icons/hotel-filter-star.svg" alt="" width={14} height={14} />
                  ))}
                </div>
                <span className={styles['hotel-filter-sidebar__rating-label']}>{star} Star</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Guest Reviews */}
        <div className={styles['hotel-filter-sidebar__section']}>
          <h3 className={styles['hotel-filter-sidebar__section-title']}>Guest Reviews</h3>
          <div className={styles['hotel-filter-sidebar__slider-wrap']}>
            <RangeSlider
              showValue
              min={0}
              max={5}
              defaultMinValue={0}
              defaultMaxValue={5}
              onChange={onGuestReviewChange}
            />
          </div>
        </div>

        {/* Property Type */}
        <div className={styles['hotel-filter-sidebar__section']}>
          <h3 className={styles['hotel-filter-sidebar__section-title']}>Property Type</h3>
          <Select
            options={PROPERTY_TYPE_OPTIONS}
            placeholder="All"
            onChange={onPropertyTypeChange}
            className={styles['hotel-filter-sidebar__select']}
          />
        </div>

        {/* Amenities */}
        <div className={styles['hotel-filter-sidebar__section']}>
          <h3 className={styles['hotel-filter-sidebar__section-title']}>Amenities</h3>
          <ul className={styles['hotel-filter-sidebar__amenity-list']}>
            {visibleAmenities.map((amenity) => (
              <li key={amenity} className={styles['hotel-filter-sidebar__amenity-item']}>
                <Checkbox
                  checked={selectedAmenities.includes(amenity)}
                  onChange={() => handleAmenityToggle(amenity)}
                  aria-label={amenity}
                />
                <span className={styles['hotel-filter-sidebar__amenity-label']}>{amenity}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={styles['hotel-filter-sidebar__show-more']}
            onClick={() => setShowAllAmenities((prev) => !prev)}
          >
            <span>{showAllAmenities ? 'Show Less' : 'Show More'}</span>
            <Image
              src="/icons/chevron-down.svg"
              alt=""
              width={10}
              height={6}
              className={showAllAmenities ? styles['hotel-filter-sidebar__chevron--up'] : ''}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelFilterSidebar;
