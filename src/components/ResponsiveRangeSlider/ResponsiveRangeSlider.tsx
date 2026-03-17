'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Icon from '@/shared/Icon/Icon';
import styles from './ResponsiveRangeSlider.module.scss';

export interface ResponsiveRangeSliderProps {
  min?: number;
  max?: number;
  defaultMinValue?: number;
  defaultMaxValue?: number;
  formatValue?: (value: number) => string;
  onChange?: (min: number, max: number) => void;
}

function defaultFormat(value: number): string {
  return '$' + value.toLocaleString();
}

export default function ResponsiveRangeSlider({
  min = 0,
  max = 10000,
  defaultMinValue,
  defaultMaxValue,
  formatValue = defaultFormat,
  onChange,
}: ResponsiveRangeSliderProps) {
  const [minVal, setMinVal] = useState(defaultMinValue ?? min);
  const [maxVal, setMaxVal] = useState(defaultMaxValue ?? max);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef<'min' | 'max' | null>(null);

  const getPercent = useCallback(
    (value: number) => ((value - min) / (max - min)) * 100,
    [min, max]
  );

  const getValueFromPosition = useCallback(
    (clientX: number): number => {
      const track = trackRef.current;
      if (!track) return min;
      const rect = track.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const raw = ratio * (max - min) + min;
      return Math.round(raw / 100) * 100;
    },
    [min, max]
  );

  const handleMouseDown = (thumb: 'min' | 'max') => (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = thumb;
  };

  const handleTouchStart = (thumb: 'min' | 'max') => (e: React.TouchEvent) => {
    e.preventDefault();
    dragging.current = thumb;
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    if (dragging.current) return;
    const value = getValueFromPosition(e.clientX);
    const midpoint = (minVal + maxVal) / 2;
    if (value < midpoint) {
      const newMin = Math.min(value, maxVal - 100);
      setMinVal(newMin);
      onChange?.(newMin, maxVal);
    } else {
      const newMax = Math.max(value, minVal + 100);
      setMaxVal(newMax);
      onChange?.(minVal, newMax);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      const value = getValueFromPosition(e.clientX);
      if (dragging.current === 'min') {
        const newMin = Math.min(value, maxVal - 100);
        setMinVal(newMin);
        onChange?.(newMin, maxVal);
      } else {
        const newMax = Math.max(value, minVal + 100);
        setMaxVal(newMax);
        onChange?.(minVal, newMax);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!dragging.current) return;
      const touch = e.touches[0];
      const value = getValueFromPosition(touch.clientX);
      if (dragging.current === 'min') {
        const newMin = Math.min(value, maxVal - 100);
        setMinVal(newMin);
        onChange?.(newMin, maxVal);
      } else {
        const newMax = Math.max(value, minVal + 100);
        setMaxVal(newMax);
        onChange?.(minVal, newMax);
      }
    };

    const handleUp = () => {
      dragging.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, [minVal, maxVal, getValueFromPosition, onChange]);

  const minPercent = getPercent(minVal);
  const maxPercent = getPercent(maxVal);

  return (
    <div className={styles['rrs']}>
      {/* Track row — thumbs are absolutely positioned relative to this */}
      <div className={styles['rrs__track-row']}>
        <div
          ref={trackRef}
          className={styles['rrs__track']}
          onClick={handleTrackClick}
        >
          <div
            className={styles['rrs__track-fill']}
            style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
          />
        </div>

        {/* Min thumb */}
        <div
          className={styles['rrs__thumb']}
          style={{ left: `${minPercent}%` }}
          onMouseDown={handleMouseDown('min')}
          onTouchStart={handleTouchStart('min')}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={minVal}
          aria-label="Minimum value"
          tabIndex={0}
        >
            <div className={styles['rrs__tooltip']}>
            <span className={styles['rrs__tooltip-text']}>{formatValue(minVal)}</span>
            <svg className={styles['rrs__tooltip-arrow']} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 6L0 0H10L5 6Z" fill="#4501e8" />
            </svg>
          </div>
          <Icon type="pointer" width={26} height={26} role="presentation" className={styles['rrs__thumb-icon']} />
        </div>

        {/* Max thumb */}
        <div
          className={styles['rrs__thumb']}
          style={{ left: `${maxPercent}%` }}
          onMouseDown={handleMouseDown('max')}
          onTouchStart={handleTouchStart('max')}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={maxVal}
          aria-label="Maximum value"
          tabIndex={0}
        >
          <div className={styles['rrs__tooltip']}>
            <span className={styles['rrs__tooltip-text']}>{formatValue(maxVal)}</span>
            <svg className={styles['rrs__tooltip-arrow']} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 6L0 0H10L5 6Z" fill="#4501e8" />
            </svg>
          </div>
          <Icon type="pointer" width={26} height={26} role="presentation" className={styles['rrs__thumb-icon']} />
        </div>
      </div>

      {/* Min/Max labels */}
      <div className={styles['rrs__labels']}>
        <span className={styles['rrs__label']}>{formatValue(min)}</span>
        <span className={styles['rrs__label']}>{formatValue(max)}</span>
      </div>
    </div>
  );
}
