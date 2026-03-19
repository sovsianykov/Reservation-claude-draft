'use client';

import { FC, useState } from 'react';
import MenuItem from '@/components/MenuItem/MenuItem';
import { IconType } from '@/shared/Icon/Icon';
import styles from './MainMenu.module.scss';

export interface MenuItemConfig {
  id: string;
  label: string;
  icon: IconType;
}

const DEFAULT_ITEMS: MenuItemConfig[] = [
  { id: 'hotels', label: 'Hotels', icon: 'hotel' },
  { id: 'tickets', label: 'Tickets', icon: 'tickets' },
  { id: 'member-perks', label: 'Member Perks', icon: 'member' },
  { id: 'everyday-savings', label: 'Everyday Savings', icon: 'wallet' },
  { id: 'fly', label: 'Flights', icon: 'fly' },
  { id: 'rental-cars', label: 'Rental Cars', icon: 'car' },
];

export interface MainMenuProps {
  items?: MenuItemConfig[];
  defaultActiveId?: string;
  onItemClick?: (id: string) => void;
}

const MainMenu: FC<MainMenuProps> = ({
  items = DEFAULT_ITEMS,
  defaultActiveId,
  onItemClick,
}) => {
  const [activeId, setActiveId] = useState<string | undefined>(defaultActiveId);

  const handleClick = (id: string) => {
    setActiveId(id);
    onItemClick?.(id);
  };

  return (
    <nav className={styles['main-menu']} aria-label="Main navigation">
      <ul className={styles['main-menu__list']}>
        {items.map((item) => (
          <li key={item.id} className={styles['main-menu__item']}>
            <MenuItem
              label={item.label}
              icon={item.icon}
              active={activeId === item.id}
              onClick={() => handleClick(item.id)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
