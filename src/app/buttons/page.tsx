"use client"
import IconButton, {
  IconButtonVariant,
  IconButtonIconPosition,
} from '@/components/IconButton/IconButton';

const variants: IconButtonVariant[] = [
  'gradient',
  'secondary',
  'white',
  'outline-grey',
  'outline-info',
  'outline-white',
];

const iconPositions: IconButtonIconPosition[] = ['right', 'left', 'none'];

export default function FigmaPreviewPage() {
  return (
    <main
      style={{
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        fontFamily: 'Manrope, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '0' }}>
        IconButton — All Variants
      </h1>

      {/* Light background section */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          padding: '32px',
          background: '#f4f4f8',
          borderRadius: '12px',
        }}
      >
        <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#555', margin: 0 }}>
          Light background
        </h2>
        {iconPositions.map((pos) => (
          <div key={pos} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#888', width: '80px', flexShrink: 0 }}>
              icon: {pos}
            </span>
            {variants.map((v) => (
              <IconButton
                  key={v}
                  label="Button"
                  variant={v}
                  iconPosition={pos} />
            ))}
          </div>
        ))}
      </section>

      {/* Dark background section */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          padding: '32px',
          background: '#101828',
          borderRadius: '12px',
        }}
      >
        <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#aaa', margin: 0 }}>
          Dark background
        </h2>
        {iconPositions.map((pos) => (
          <div key={pos} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#888', width: '80px', flexShrink: 0 }}>
              icon: {pos}
            </span>
            {variants.map((v) => (
              <IconButton
                key={v}
                label="Button"
                variant={v}
                iconPosition={pos}
              />
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}
