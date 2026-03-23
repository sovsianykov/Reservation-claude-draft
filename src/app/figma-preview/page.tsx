import StepContainer from '@/components/StepContainer/StepContainer';

export default function FigmaPreviewPage() {
  return (
    <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#f0f0f0' }}>
      <StepContainer
        stepNumber={1}
        description="Pick the plan that fits your style — whether you're a casual explorer or a frequent flyer, there's a membership for you."
      />
    </main>
  );
}
