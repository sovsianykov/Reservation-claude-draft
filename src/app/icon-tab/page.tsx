'use client';
import { useState } from 'react';
import IconTab from '@/components/IconTab/IconTab';
import styles from './page.module.scss';

const tabs = [
  { id: 'address', icon: 'addressBook' as const, label: 'Address Book' },
  { id: 'cards', icon: 'creditCardMultiple' as const, label: 'My Credit Cards' },
];

export default function IconTabPage() {
  const [activeTab, setActiveTab] = useState('cards');

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Icon Tab</h1>
      <p className={styles.subtitle}>Tab component with icon and label — default and active states.</p>

      <div className={styles.section}>
        <p className={styles['section-title']}>Interactive</p>
        <div className={styles.row}>
          {tabs.map((tab) => (
            <IconTab
              key={tab.id}
              icon={tab.icon}
              label={tab.label}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
