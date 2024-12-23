import React from 'react';
import { useToast } from 'juny-react-style';

import ErrorBoundary from '@shared/error-boundary/error-boundary';
interface FeatureComponentsProps {
  featureKey: string; // 동적으로 로드할 컴포넌트 키
}

const FeatureComponents: React.FC<FeatureComponentsProps> = ({
  featureKey,
}) => {
  const { addToast } = useToast();
  let DynamicComponent: React.LazyExoticComponent<React.FC> | null = null;
  try {
    DynamicComponent = React.lazy(() => import(`./${featureKey}`));
  } catch (error) {
    console.log('error', error);
    addToast(error?.toString() || 'unknown');
  }
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        {DynamicComponent && <DynamicComponent />}
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default FeatureComponents;
