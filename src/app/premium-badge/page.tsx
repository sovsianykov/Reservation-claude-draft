import PremiumBadge from '@/components/PremiumBadge/PremiumBadge';

export default function FigmaPreviewPage() {
    return (
        <main style={{ padding: '40px', background: '#f4f4f8', minHeight: '100vh' }}>
            <h1 style={{ fontFamily: 'Manrope, sans-serif', marginBottom: '32px', fontSize: '20px' }}>
                PremiumBadge Preview
            </h1>
            <PremiumBadge renewsDate="11/26/2026" />
        </main>
    );
}
