import { FC, useId } from 'react';
import ArrowRight from '../../../public/icons/arrow-right.svg';
import Search from '../../../public/icons/search.svg';
import Tag from '../../../public/icons/tag.svg';
import Wallet from '../../../public/icons/wallet.svg';
import Perk from '../../../public/icons/perk.svg';
import Pointer from '../../../public/icons/pointer.svg';
import Flight from '../../../public/icons/flight.svg';
import CheckFill from '../../../public/icons/check-fill.svg';
import GiftOpen from '../../../public/icons/gift-open.svg';
import Plus from '../../../public/icons/plus.svg';
import Minus from '../../../public/icons/minus.svg';
import Verified from '../../../public/icons/verified.svg';

export const iconMap = {
  arrowRight: ArrowRight,
  search: Search,
  tag: Tag,
  wallet: Wallet,
  perk: Perk,
  pointer: Pointer,
  flight: Flight,
  checkFill: CheckFill,
  giftOpen: GiftOpen,
  plus: Plus,
  minus: Minus,
  verified: Verified,
};

export type IconType = keyof typeof iconMap;

export interface IconProps {
  type: IconType;
  className?: string;
  width?: number;
  height?: number;
  onClick?: (e?: unknown) => void;
  active?: boolean;
  alt?: string;
  role?: 'img' | 'presentation';
  ariaLabel?: string;
  priority?: boolean;
}

export const Icon: FC<IconProps> = ({
  type,
  width,
  height,
  role = 'img',
  ariaLabel,
  priority: _priority,
  alt: _alt,
  ...other
}) => {
  const IconComponent = iconMap[type];
  const uniqueId = useId();
  const description = ariaLabel || type;
  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      width={width}
      height={height}
      data-testid="icon"
      {...other}
      role={role}
      aria-label={role !== 'presentation' ? description : undefined}
      id={`icon-${uniqueId}`}
    />
  );
};

export default Icon;
