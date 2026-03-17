'use client';
import { useState } from 'react';
import Tab from '@/components/Tab/Tab';

export default function FigmaPreviewPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabs = ['Add text here', 'Add text here'];

    return (
        <div style={{ padding: '40px', background: '#1a1a2e', display: 'flex', gap: '8px' }}>
            {tabs.map((label, i) => (
                <Tab
                    key={i}
                    label={label}
                    active={activeIndex === i}
                    onClick={() => setActiveIndex(i)}
                />
            ))}
        </div>
    );
}
