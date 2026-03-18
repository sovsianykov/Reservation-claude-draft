'use client';

import { FC, useState } from 'react';
import clsx from 'clsx';
import styles from './RadioButton.module.scss';

export interface RadioButtonProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  'aria-label'?: string;
}

const RadioButton: FC<RadioButtonProps> = ({
  checked: controlledChecked,
  onChange,
  className,
  'aria-label': ariaLabel = 'Radio button',
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
      role="radio"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={handleClick}
      className={clsx(
        styles['radio-button'],
        checked && styles['radio-button--checked'],
        className,
      )}
    >
      <span className={styles['radio-button__ring']} />
      {checked && <span className={styles['radio-button__dot']} />}
    </button>
  );
};

export default RadioButton;
