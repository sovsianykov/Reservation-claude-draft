import MainMenu from '@/components/MainMenu/MainMenu';

export default function FigmaPreviewPage() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
      <MainMenu defaultActiveId="flights" />
    </main>
  );
}
