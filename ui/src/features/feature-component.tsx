import React from 'react';

interface FeatureComponentsProps {
  featureKey: string; // 동적으로 로드할 컴포넌트 키
}

const FeatureComponents: React.FC<FeatureComponentsProps> = ({
  featureKey,
}) => {
  // 동적으로 컴포넌트 로드
  const DynamicComponent = React.lazy(() => import(`./${featureKey}`));

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <DynamicComponent />
    </React.Suspense>
  );
};

export default FeatureComponents;
