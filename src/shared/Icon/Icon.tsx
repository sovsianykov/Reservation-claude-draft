import {FC, useId} from "react";

export const iconMap = {
    arrowRight: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" fill="none" {...props}>
            <path d="M3.5 8.5H14.5M14.5 8.5L10 4M14.5 8.5L10 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),
    search: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" {...props}>
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.8"/>
            <line x1="13.5" y1="13.5" x2="17.5" y2="17.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
    ),
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
