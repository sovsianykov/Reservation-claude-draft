import { FC } from 'react';
import clsx from 'clsx';
import Icon, { IconType } from '@/shared/Icon/Icon';
import styles from './MenuItem.module.scss';

export interface MenuItemProps {
  label: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ label, icon, active = false, onClick }) => {
  return (
    <button
      className={clsx(styles['menu-item'], { [styles['menu-item--active']]: active })}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
    >
      <span className={styles['menu-item__icon']} aria-hidden="true">
        <Icon type={icon} width={17} height={17} role="presentation" />
      </span>
      <span className={styles['menu-item__label']}>{label}</span>
    </button>
  );
};

export default MenuItem;
