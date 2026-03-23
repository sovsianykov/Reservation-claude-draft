import StepContainer from '@/components/StepContainer/StepContainer';
import styles from './page.module.scss';

export default function StepContainerPage() {
  return (
    <div className={styles.page}>
      <div className={styles.heading}>
        <h1>Step Container</h1>
        <p>Informational step card with icon, title, and description from Figma designs</p>
      </div>

      <div className={styles.grid}>
        <StepContainer
          stepNumber={1}
          description="Pick the plan that fits your style — whether you're a casual explorer or a frequent flyer, there's a membership for you."
        />
        <StepContainer
          stepNumber={2}
          description="Complete your registration and verify your identity to unlock exclusive member benefits worldwide."
        />
        <StepContainer
          stepNumber={3}
          description="Start enjoying premium perks, discounted rates, and priority access at thousands of hotels globally."
        />
      </div>
    </div>
  );
}
