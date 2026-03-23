import { FC } from 'react';
import { Icon } from '@/shared/Icon/Icon';
import { IconType } from '@/shared/Icon/Icon';
import styles from './SmallBadge.module.scss';

export type SmallBadgeVariant =
  | 'outline-red'
  | 'warning'
  | 'grey'
  | 'danger'
  | 'success'
  | 'badge-info-light';

export interface SmallBadgeProps {
  variant?: SmallBadgeVariant;
  label?: string;
  hasIcon?: boolean;
}

const ICON_MAP: Record<SmallBadgeVariant, IconType> = {
  'outline-red': 'tag',
  warning: 'tag',
  grey: 'tag',
  success: 'wallet',
  danger: 'perk',
  'badge-info-light': 'perk',
};

export const SmallBadge: FC<SmallBadgeProps> = ({
  variant = 'outline-red',
  label = 'Add text here',
  hasIcon = true,
}) => {
  return (
    <span className={`${styles['small-badge']} ${styles[`small-badge--${variant}`]}`}>
      {hasIcon && (
        <span className={styles['small-badge__icon']}>
          <Icon type={ICON_MAP[variant]} width={14} height={14} role="presentation" />
        </span>
      )}
      <span className={styles['small-badge__label']}>{label}</span>
    </span>
  );
};

export default SmallBadge;
