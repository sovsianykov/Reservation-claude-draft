import HomeMembershipCard from '@/containers/HomeMembershipCard/HomeMembershipCard';

export default function FigmaPreviewPage() {
  return (
    <main style={{ padding: '40px', background: '#ffffff', minHeight: '100vh', display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <HomeMembershipCard membershipCardType="classic" />
      <HomeMembershipCard membershipCardType="plus" />
      <HomeMembershipCard membershipCardType="premium" />
    </main>
  );
}
