import {FC, useId} from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ArrowRight from "../../../public/icons/arrow-right.svg?react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Search from "../../../public/icons/search.svg?react";

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
