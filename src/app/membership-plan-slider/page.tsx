'use client';

import PremiumMembershipBar from '@/components/PremiumMembershipBar/PremiumMembershipBar';

export default function FigmaPreviewPage() {
  return (
    <div
      style={{
        background: '#0d1117',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 40px',
      }}
    >
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <PremiumMembershipBar
          label="1 Month"
          buttonText="Anniversary Gift"
          progress={60}
        />
      </div>
    </div>
  );
}
