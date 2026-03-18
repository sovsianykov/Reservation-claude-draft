import { FC } from 'react';
import clsx from 'clsx';
import Icon from '@/shared/Icon/Icon';
import styles from './ToggleButton.module.scss';

export interface ToggleButtonProps {
  active?: boolean;
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
}

const ToggleButton: FC<ToggleButtonProps> = ({
  active = false,
  onClick,
  className,
  'aria-label': ariaLabel = 'Toggle',
}) => {
  return (
    <button
      type="button"
      className={clsx(
        styles['toggle-button'],
        active && styles['toggle-button--active'],
        className,
      )}
      onClick={onClick}
      aria-pressed={active}
      aria-label={ariaLabel}
    >
      <Icon
        type={active ? 'minus' : 'plus'}
        width={15}
        height={active ? 2 : 15}
        role="presentation"
        className={styles['toggle-button__icon']}
      />
    </button>
  );
};

export default ToggleButton;
