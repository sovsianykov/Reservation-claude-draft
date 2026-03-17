'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './RangeSlider.module.scss';

export interface RangeSliderProps {
  min?: number;
  max?: number;
  defaultMinValue?: number;
  defaultMaxValue?: number;
  onChange?: (min: number, max: number) => void;
}

export default function RangeSlider({
  min = 0,
  max = 10,
  defaultMinValue,
  defaultMaxValue,
  onChange,
}: RangeSliderProps) {
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
      return Math.round(raw);
    },
    [min, max]
  );

  const handleMouseDown = (thumb: 'min' | 'max') => (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = thumb;
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    if (dragging.current) return;
    const value = getValueFromPosition(e.clientX);
    const midpoint = (minVal + maxVal) / 2;
    if (value < midpoint) {
      const newMin = Math.min(value, maxVal);
      setMinVal(newMin);
      onChange?.(newMin, maxVal);
    } else {
      const newMax = Math.max(value, minVal);
      setMaxVal(newMax);
      onChange?.(minVal, newMax);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      const value = getValueFromPosition(e.clientX);
      if (dragging.current === 'min') {
        const newMin = Math.min(value, maxVal);
        setMinVal(newMin);
        onChange?.(newMin, maxVal);
      } else {
        const newMax = Math.max(value, minVal);
        setMaxVal(newMax);
        onChange?.(minVal, newMax);
      }
    };

    const handleMouseUp = () => {
      dragging.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [minVal, maxVal, getValueFromPosition, onChange]);

  const minPercent = getPercent(minVal);
  const maxPercent = getPercent(maxVal);

  return (
    <div className={styles['range-slider']}>
      <div
        ref={trackRef}
        className={styles['range-slider__track']}
        onClick={handleTrackClick}
      >
        <div
          className={styles['range-slider__track-fill']}
          style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
        />
      </div>

      {/* Min thumb */}
      <div
        className={styles['range-slider__thumb']}
        style={{ left: `${minPercent}%` }}
        onMouseDown={handleMouseDown('min')}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={minVal}
        aria-label="Minimum value"
        tabIndex={0}
      >
        <span className={styles['range-slider__thumb-label']}>{minVal}</span>
      </div>

      {/* Max thumb */}
      <div
        className={styles['range-slider__thumb']}
        style={{ left: `${maxPercent}%` }}
        onMouseDown={handleMouseDown('max')}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={maxVal}
        aria-label="Maximum value"
        tabIndex={0}
      >
        <span className={styles['range-slider__thumb-label']}>{maxVal}</span>
      </div>
    </div>
  );
}
