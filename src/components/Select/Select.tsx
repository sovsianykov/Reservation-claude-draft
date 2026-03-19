'use client';

import { FC, useId, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import styles from './Select.module.scss';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options?: SelectOption[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const DEFAULT_OPTIONS: SelectOption[] = [
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest First' },
];

const Select: FC<SelectProps> = ({
  options = DEFAULT_OPTIONS,
  value,
  placeholder = 'Sort By',
  onChange,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<SelectOption | null>(
    value ? (options.find((o) => o.value === value) ?? null) : null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  const handleSelect = (option: SelectOption) => {
    setSelected(option);
    setOpen(false);
    onChange?.(option.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false);
    if (e.key === 'Enter' || e.key === ' ') setOpen((prev) => !prev);
  };

  return (
    <div
      ref={ref}
      className={clsx(styles['select'], open && styles['select--open'], className)}
      data-testid="select"
    >
      <button
        type="button"
        className={styles['select__trigger']}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-listbox`}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
      >
        <span className={clsx(styles['select__label'], !selected && styles['select__label--placeholder'])}>
          {selected ? selected.label : placeholder}
        </span>
        <span className={clsx(styles['select__chevron'], open && styles['select__chevron--up'])} aria-hidden="true">
          <Image src="/icons/chevron-down.svg" alt="" width={10} height={6} />
        </span>
      </button>

      {open && (
        <ul
          id={`${id}-listbox`}
          role="listbox"
          className={styles['select__dropdown']}
          aria-label={placeholder}
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={selected?.value === option.value}
              className={clsx(
                styles['select__option'],
                selected?.value === option.value && styles['select__option--selected']
              )}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
