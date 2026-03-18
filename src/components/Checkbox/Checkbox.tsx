'use client';

import { FC, useState } from 'react';
import clsx from 'clsx';
import styles from './Checkbox.module.scss';

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  'aria-label'?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  checked: controlledChecked,
  onChange,
  className,
  'aria-label': ariaLabel = 'Checkbox',
}) => {
  const isControlled = controlledChecked !== undefined;
  const [localChecked, setLocalChecked] = useState(false);
  const checked = isControlled ? controlledChecked : localChecked;

  const handleClick = () => {
    const next = !checked;
    if (!isControlled) setLocalChecked(next);
    onChange?.(next);
  };

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={handleClick}
      className={clsx(styles.checkbox, checked && styles['checkbox--checked'], className)}
    >
      <span className={styles.checkbox__box} />
      {checked && (
        <span className={styles.checkbox__check} aria-hidden="true">
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4L3.5 6.5L9 1" stroke="#7D00FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </button>
  );
};

export default Checkbox;
