import { FC } from 'react';
import clsx from 'clsx';
import Icon, { IconType } from '@/shared/Icon/Icon';
import styles from './IconTab.module.scss';

export interface IconTabProps {
  label: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
}

const IconTab: FC<IconTabProps> = ({ label, icon, active = false, onClick }) => {
  return (
    <button
      className={clsx(styles['icon-tab'], active && styles['icon-tab--active'])}
      onClick={onClick}
      aria-selected={active}
      role="tab"
      type="button"
    >
      <span className={styles['icon-tab__icon']} aria-hidden="true">
        <Icon type={icon} width={20} height={20} role="presentation" />
      </span>
      <span className={styles['icon-tab__label']}>{label}</span>
    </button>
  );
};

export default IconTab;
