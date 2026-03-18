'use client';

import { FC, InputHTMLAttributes, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import styles from './TextInput.module.scss';

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  iconLeft?: boolean;
  iconRight?: boolean;
  showCheckIcon?: boolean;
  className?: string;
}

const TextInput: FC<TextInputProps> = ({
  iconLeft = true,
  iconRight = true,
  showCheckIcon = false,
  className,
  placeholder = 'Enter your email',
  ...rest
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={clsx(styles['text-input'], focused && styles['text-input--focused'], className)}
    >
      {iconLeft && (
        <span className={styles['text-input__icon-left']} aria-hidden="true">
          <Image src="/icons/user.svg" alt="" width={18} height={19} />
        </span>
      )}

      <input
        className={styles['text-input__field']}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
      />

      {showCheckIcon && (
        <span className={styles['text-input__check']} aria-hidden="true">
          <Image src="/icons/check-fill.svg" alt="" width={20} height={20} />
        </span>
      )}

      {iconRight && (
        <span className={styles['text-input__icon-right']} aria-hidden="true">
          <Image src="/icons/user.svg" alt="" width={18} height={19} />
        </span>
      )}
    </div>
  );
};

export default TextInput;
