import DaysCounter from '@/components/DaysCounter/DaysCounter';

export default function FigmaPreviewPage() {
  return (
    <main style={{ background: '#0d0d1a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
      <DaysCounter days={12} maxDays={30} />
      <DaysCounter days={4} maxDays={30} />
    </main>
  );
}
