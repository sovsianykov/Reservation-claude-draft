import Image from "next/image";
import {FC, useId} from "react";

import ArrowRight from "../../../public/icons/arrow-right.svg";
import Search from "../../../public/icons/search.svg";

export const iconMap = {
    arrowRight: ArrowRight,
    search: Search,

}

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
                                        alt = '',
                                        priority = false,
                                        ariaLabel,
                                        ...other
                                    }) => {
    const IconComponent = iconMap[type];
    const uniqueId = useId();
    const description = ariaLabel || type;
    if (!IconComponent) {
        return null;
    }

    if (typeof IconComponent === 'object') {
        // It's an image import
        return (
            <Image
                priority={priority}
                src={IconComponent}
                width={width}
                height={height}
                alt={alt ?? `${type} icon`}
                {...other}
                data-testid={`icon-${type}`}
            />
        );
    }

    // It's an SVG import
    return (
        <IconComponent
            width={width}
            data-testid="icon"
            height={height}
            {...other}
            role={role}
            aria-label={role !== 'presentation' ? description : undefined}
            id={`icon-${uniqueId}`}
        />
    );
};

export default Icon;
