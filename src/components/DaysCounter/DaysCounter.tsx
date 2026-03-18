import { FC } from 'react';
import styles from './DaysCounter.module.scss';

export interface DaysCounterProps {
  days: number;
  maxDays?: number;
}

const DaysCounter: FC<DaysCounterProps> = ({ days, maxDays = 30 }) => {
  const size = 53;
  const center = size / 2;
  const strokeWidth = 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(days / maxDays, 1);
  const dash = circumference * progress;

  return (
    <div className={styles['days-counter']}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-label={`${days} days`}
        role="img"
      >
        {/* Track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          className={styles['days-counter__track']}
          strokeWidth={strokeWidth}
        />
        {/* Progress arc */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          className={styles['days-counter__arc']}
          strokeWidth={strokeWidth}
          strokeDasharray={`${dash} ${circumference}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${center} ${center})`}
        />
        {/* Label */}
        <text
          className={styles['days-counter__label']}
          x={center}
          y={center}
          textAnchor="middle"
          dominantBaseline="central"
        >
          {days}d
        </text>
      </svg>
    </div>
  );
};

export default DaysCounter;
