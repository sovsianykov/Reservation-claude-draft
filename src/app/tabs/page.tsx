'use client';
import { useState } from 'react';
import Tab from '@/components/Tab/Tab';
import styles from './page.module.scss';

const TABS = ['Flights', 'Hotels', 'Car Rental', 'Experiences'];

export default function TabsPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={styles.page}>
            <h1 className={styles.page__title}>Tab Component</h1>
            <div className={styles.page__tabs} role="tablist">
                {TABS.map((label, i) => (
                    <Tab
                        key={label}
                        label={label}
                        active={activeIndex === i}
                        onClick={() => setActiveIndex(i)}
                    />
                ))}
            </div>
            <p className={styles.page__active}>Active tab: <strong>{TABS[activeIndex]}</strong></p>
        </div>
    );
}
