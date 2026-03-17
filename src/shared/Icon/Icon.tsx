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
    tag: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" fill="none" {...props}>
            <path d="M10.8651 0.00505553L6.72186 0C6.5337 9.1209e-05 6.34742 0.0374788 6.17381 0.11C6.0002 0.182521 5.8427 0.288736 5.71042 0.4225L0.414812 5.76261C0.148978 6.03278 0 6.39656 0 6.77553C0 7.15449 0.148978 7.51828 0.414812 7.78844L5.16352 12.5775C5.29556 12.7116 5.45301 12.818 5.62668 12.8906C5.80035 12.9631 5.98674 13.0003 6.17496 13C6.36311 12.9999 6.54939 12.9625 6.723 12.89C6.89661 12.8175 7.05411 12.7113 7.18639 12.5775L12.5391 7.17744C12.684 7.04272 12.7997 6.87968 12.879 6.69842C12.9583 6.51716 12.9994 6.32155 13 6.12372V2.1515C13.0004 1.58423 12.776 1.03991 12.3759 0.637641C11.9758 0.235373 11.4326 0.00792039 10.8651 0.00505553ZM9.09368 4.65472C8.90207 4.65472 8.71831 4.57863 8.58283 4.44319C8.44734 4.30775 8.37122 4.12404 8.37122 3.9325C8.37122 3.74095 8.44734 3.55725 8.58283 3.42181C8.71831 3.28637 8.90207 3.21028 9.09368 3.21028C9.28529 3.21028 9.46905 3.28637 9.60453 3.42181C9.74002 3.55725 9.81614 3.74095 9.81614 3.9325C9.81614 4.12404 9.74002 4.30775 9.60453 4.44319C9.46905 4.57863 9.28529 4.65472 9.09368 4.65472Z" fill="currentColor"/>
        </svg>
    ),
    wallet: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.2755 15" fill="none" {...props}>
            <path d="M6.10001 14.5H8.20001C10.8397 14.5 12.1599 14.5 12.9796 13.6364C13.5459 13.041 13.7216 12.1952 13.7755 10.8158M13.7755 6.39471C13.7209 5.01534 13.5459 4.16945 12.9796 3.57408C12.1599 2.71049 10.8397 2.71049 8.20001 2.71049H6.10001C3.46031 2.71049 2.1401 2.71049 1.3204 3.57408C0.5007 4.43766 0.5 5.82661 0.5 8.60525C0.5 11.3839 0.5 12.7736 1.3204 13.6364C1.7775 14.1183 2.39 14.3313 3.30001 14.4248M3.30001 2.71049L5.91451 0.885331C6.28229 0.633847 6.71145 0.5 7.15001 0.5C7.58858 0.5 8.01773 0.633847 8.38551 0.885331L11 2.71049" stroke="currentColor" strokeLinecap="round"/>
        </svg>
    ),
    perk: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.1497 11.7055" fill="none" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.60808 8.28972L3.36335 11.4033C3.34597 11.6223 3.55033 11.7727 3.73282 11.6752C5.02595 10.9852 9.07635 8.45101 11.1294 2.8812C11.2236 2.62565 10.9705 2.3952 10.7547 2.5394C9.54197 3.34852 6.89179 5.02015 5.25386 5.33899C5.25386 5.33899 6.30283 4.6447 6.93048 3.57977C6.9606 3.52861 6.97541 3.47055 6.97328 3.41193C6.97116 3.35331 6.95218 3.29637 6.91842 3.24731L4.62902 0.103779C4.49334 -0.0823439 4.2147 -0.00517097 4.16592 0.232223L3.45306 3.68685L0.107671 6.46828C-0.0599632 6.60767 -0.0257636 6.88939 0.16794 6.9639L3.60808 8.28972ZM9.52403 7.06243C9.31211 7.34415 8.85574 7.92335 8.43441 8.27744C8.35032 8.3482 8.36153 8.46677 8.45796 8.52445L10.6846 9.85588C10.8186 9.93599 10.9994 9.84092 10.977 9.70207C10.8732 9.06572 10.575 7.7391 9.82061 7.04267C9.73652 6.96523 9.59131 6.97324 9.52403 7.06243Z" fill="currentColor"/>
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
