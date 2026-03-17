import TravelDetailBadge from '@/components/TravelDetailBadge/TravelDetailBadge';

export default function FigmaPreviewPage() {
    return (
        <main style={{ padding: '40px', background: '#2e3347', minHeight: '100vh' }}>
            <h1 style={{ fontFamily: 'Manrope, sans-serif', marginBottom: '32px', fontSize: '20px', color: 'white' }}>
                TravelDetailBadge Preview
            </h1>
            <TravelDetailBadge from="TPA" to="LGW" />
        </main>
    );
}
