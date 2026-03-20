'use client';

import { FC } from 'react';
import styles from './HotelMapView.module.scss';

interface HotelMapViewProps {
  onClick?: () => void;
}

const HotelMapView: FC<HotelMapViewProps> = ({ onClick }) => {
  return (
    <div className={styles['hotel-map-view']}>
      <button type="button" className={styles['hotel-map-view__btn']} onClick={onClick}>
        View Hotels in Map View
      </button>
    </div>
  );
};

export default HotelMapView;
