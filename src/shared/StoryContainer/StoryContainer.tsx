import { useState } from 'react';
import styles from './StoryContainer.module.scss';

interface StoryContainerProps {
    children: React.ReactNode;
    defaultTheme?: 'light' | 'dark';
}

export default function StoryContainer({ children, defaultTheme = 'light' }: StoryContainerProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>(defaultTheme);

    return (
        <div className={`${styles.container} ${styles[theme]}`}>
            <button
                className={styles.toggle}
                onClick={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}
                aria-label="Toggle theme"
            >
                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
            <div className={styles.content}>{children}</div>
        </div>
    );
}
