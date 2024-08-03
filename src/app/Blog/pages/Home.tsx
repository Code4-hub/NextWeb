import React, { lazy, Suspense, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { componentsData } from './componentsData';

const importComponent = (path: string) => lazy(() => import(`${path}`).then(module => ({ default: module.default })));

const Home: React.FC = () => {
  const { page } = useParams<{ page?: string }>();
  const pageKey = page?.toLowerCase();
  
  const Component = useMemo(() => {
    const componentData = componentsData.find(
      (data) => data.title.toLowerCase() === pageKey
    );
    return componentData ? importComponent(componentData.path) : null;
  }, [pageKey]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {Component ? <Component /> : <div>Home</div>}
      </Suspense>
    </div>
  );
};

export default Home;