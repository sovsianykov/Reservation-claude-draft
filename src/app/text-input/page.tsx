'use client';

import TextInput from '@/components/TextInput/TextInput';

export default function TextInputPage() {
  return (
    <div style={{ background: '#0d0d1a', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px' }}>
      <h1 style={{ color: '#fff', fontSize: '24px', fontWeight: 600 }}>Text Input</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ color: '#a6a6a6', fontSize: '12px' }}>Default</span>
          <TextInput placeholder="Enter your email" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ color: '#a6a6a6', fontSize: '12px' }}>With check icon</span>
          <TextInput placeholder="Enter your email" showCheckIcon />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ color: '#a6a6a6', fontSize: '12px' }}>No icons</span>
          <TextInput placeholder="Enter your email" iconLeft={false} iconRight={false} />
        </div>
      </div>
    </div>
  );
}
