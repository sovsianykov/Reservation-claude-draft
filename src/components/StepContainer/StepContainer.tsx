import { FC } from 'react';
import Icon from '@/shared/Icon/Icon';
import styles from './StepContainer.module.scss';

export interface StepContainerProps {
  stepNumber: number;
  description: string;
}

const StepContainer: FC<StepContainerProps> = ({ stepNumber, description }) => {
  return (
    <div className={styles['step-container']}>
      <div className={styles['step-container__wrapper']}>
        <div className={styles['step-container__icon']}>
          <Icon type="crownXl" width={55} height={55} role="presentation" />
        </div>
        <p className={styles['step-container__title']}>Step {stepNumber}</p>
        <p className={styles['step-container__description']}>{description}</p>
      </div>
    </div>
  );
};

export default StepContainer;
