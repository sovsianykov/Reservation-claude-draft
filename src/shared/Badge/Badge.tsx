import { FC, ReactNode } from 'react';
import styles from './Badge.module.scss';

export type BadgeVariant = 'success' | 'warning' | 'info';

export interface BadgeProps {
    label: string;
    variant: BadgeVariant;
    hasIcon?: boolean;
    icon?: ReactNode;
}

export const Badge: FC<BadgeProps> = ({ label, variant, hasIcon = false, icon }) => {
    return (
        <span className={`${styles.badge} ${styles[`badge--${variant}`]}`}>
            {hasIcon && icon && (
                <span className={styles.badge__icon}>{icon}</span>
            )}
            <span className={styles.badge__label}>{label}</span>
        </span>
    );
};

export default Badge;
