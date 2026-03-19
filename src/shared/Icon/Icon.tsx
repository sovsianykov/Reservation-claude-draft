import { FC, useId } from 'react';
import ArrowRight from '../../../public/icons/arrow-right.svg';
import Search from '../../../public/icons/search.svg';
import Tag from '../../../public/icons/tag.svg';
import Wallet from '../../../public/icons/wallet.svg';
import Perk from '../../../public/icons/perk.svg';
import Pointer from '../../../public/icons/pointer.svg';
import Flight from '../../../public/icons/flight.svg';
import Fly from '../../../public/icons/fly.svg';
import CheckFill from '../../../public/icons/check-fill.svg';
import GiftOpen from '../../../public/icons/gift-open.svg';
import Plus from '../../../public/icons/plus.svg';
import Minus from '../../../public/icons/minus.svg';
import Verified from '../../../public/icons/verified.svg';
import Hotel from '../../../public/icons/hotel.svg';
import Ticket from '../../../public/icons/ticket.svg';
import Tickets from '../../../public/icons/tickets.svg';
import Member from '../../../public/icons/member.svg';
import Savings from '../../../public/icons/savings.svg';
import Car from '../../../public/icons/car.svg';
import PoiMap from '../../../public/icons/poi-map.svg';
import AddressBook from '../../../public/icons/address-book.svg';
import CreditCardMultiple from '../../../public/icons/credit-card-multiple.svg';
import LocationPin from '../../../public/icons/location-pin.svg';
import Calendar from '../../../public/icons/calendar.svg';
import ArrowRightThin from '../../../public/icons/arrow-right-thin.svg';
import Guests from '../../../public/icons/guests.svg';
import ClassicMembership from '../../../public/icons/classic-membership.svg';
import CheckCircle from '../../../public/icons/check-circle.svg';
import PlusMembership from '../../../public/icons/plus-membership.svg';
import PremiumMembership from '../../../public/icons/premium-membership.svg';

export const iconMap = {
  arrowRight: ArrowRight,
  search: Search,
  tag: Tag,
  wallet: Wallet,
  perk: Perk,
  pointer: Pointer,
  flight: Flight,
  fly: Fly,
  checkFill: CheckFill,
  giftOpen: GiftOpen,
  plus: Plus,
  minus: Minus,
  verified: Verified,
  hotel: Hotel,
  ticket: Ticket,
  tickets: Tickets,
  member: Member,
  savings: Savings,
  car: Car,
  poiMap: PoiMap,
  addressBook: AddressBook,
  creditCardMultiple: CreditCardMultiple,
  locationPin: LocationPin,
  calendar: Calendar,
  arrowRightThin: ArrowRightThin,
  guests: Guests,
  classicMembership: ClassicMembership,
  checkCircle: CheckCircle,
  plusMembership: PlusMembership,
  premiumMembership: PremiumMembership,
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
