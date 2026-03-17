import React, {MouseEventHandler} from 'react';
import clsx from 'clsx';
import Icon from '@/shared/Icon/Icon';
import styles from './IconButton.module.scss';

export type IconButtonVariant =
  | 'gradient'
  | 'secondary'
  | 'white'
  | 'outline-grey'
  | 'outline-info'
  | 'outline-white';

export type IconButtonIconPosition = 'left' | 'right' | 'none';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: IconButtonVariant;
  /** Which side to show the icon, or 'none' for label-only */
  iconPosition?: IconButtonIconPosition;
  /** Custom icon element; defaults to built-in SearchIcon (left) or ArrowRightIcon (right) */
  icon?: React.ReactNode;

  type?: 'button' | 'submit' | 'reset';

  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}


// ── Component ──────────────────────────────────────────────────────────────────

export default function IconButton({
  label,
  variant = 'gradient',
  iconPosition = 'right',
  icon,
  type = 'button',
  className,
  onClick,
  ...rest
}: IconButtonProps) {

  const onClickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
  };
  const defaultIcon =
    iconPosition === 'left'
      ? <Icon type="search" width={20} height={20} role="presentation"  />
      : <Icon type="arrowRight" width={20} height={20} role="presentation" />;
  const resolvedIcon = icon ?? defaultIcon;
  const hasIcon = iconPosition !== 'none';

  const classNames = clsx(
    styles['icon-button'],
    styles[`icon-button--${variant}`],
    iconPosition === 'left' && styles['icon-button--with-left-icon'],
    className,
  );

  return (
    <button type={type} className={classNames} {...rest} onClick={onClickHandler}>
      {hasIcon && iconPosition === 'left' && (
        <span className={styles['icon-button__icon']} aria-hidden="true">
          {resolvedIcon}
        </span>
      )}

      <span className={styles['icon-button__label']}>{label}</span>

      {hasIcon && iconPosition === 'right' && (
        <span className={styles['icon-button__icon']} aria-hidden="true">
          {resolvedIcon}
        </span>
      )}
    </button>
  );
}
