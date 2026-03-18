'use client';

import { useState } from 'react';
import Checkbox from '@/components/Checkbox/Checkbox';

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ background: '#0d0d1a', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '48px' }}>
      <h1 style={{ color: '#fff', fontSize: '24px', fontWeight: 600 }}>Checkbox</h1>

      <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
        {/* Interactive */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <Checkbox checked={checked} onChange={setChecked} aria-label="Toggle" />
          <span style={{ color: '#a6a6a6', fontSize: '12px' }}>{checked ? 'checked: true' : 'checked: false'}</span>
        </div>

        {/* Static unchecked */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <Checkbox checked={false} aria-label="Unchecked" />
          <span style={{ color: '#a6a6a6', fontSize: '12px' }}>checked: false</span>
        </div>

        {/* Static checked */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <Checkbox checked={true} aria-label="Checked" />
          <span style={{ color: '#a6a6a6', fontSize: '12px' }}>checked: true</span>
        </div>
      </div>
    </div>
  );
}
