import { FC } from 'react';
import styles from './Tab.module.scss';

export interface TabProps {
    label: string;
    active: boolean;
    onClick?: () => void;
}

const Tab: FC<TabProps> = ({ label, active, onClick }) => {
    return (
        <button
            className={`${styles.tab} ${active ? styles['tab--active'] : ''}`}
            onClick={onClick}
            aria-selected={active}
            role="tab"
        >
            <span className={styles.tab__label}>{label}</span>
        </button>
    );
};

export default Tab;
