'use client';
import DaysCounter from '@/components/DaysCounter/DaysCounter';

const examples = [
  { days: 4, maxDays: 30, label: 'Default' },
  { days: 7, maxDays: 30, label: 'Quarter' },
  { days: 15, maxDays: 30, label: 'Half' },
  { days: 22, maxDays: 30, label: 'Three Quarters' },
  { days: 30, maxDays: 30, label: 'Full' },
  { days: 45, maxDays: 90, label: 'Long Trip' },
];

export default function DaysCounterPage() {
  return (
    <div style={{ background: '#0d0d1a', minHeight: '100vh', padding: '48px 32px' }}>
      <h1 style={{ color: '#fff', marginBottom: 8 }}>Days Counter</h1>
      <p style={{ color: '#888', marginBottom: 48 }}>Circular arc progress indicator showing trip duration.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-start' }}>
        {examples.map(({ days, maxDays, label }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <DaysCounter days={days} maxDays={maxDays} />
            <span style={{ color: '#aaa', fontSize: 12 }}>{label}</span>
            <span style={{ color: '#555', fontSize: 11 }}>{days}/{maxDays} days</span>
          </div>
        ))}
      </div>
    </div>
  );
}
