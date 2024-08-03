import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { componentsData } from "./ComponentsData";

const componentMap: { [key: string]: React.LazyExoticComponent<React.FC> } = {};

componentsData.forEach((component) => {
  componentMap[component.title.toLowerCase()] = lazy(() =>
    import(`${component.path}`).then((module) => ({ default: module.default }))
  );
});

export const Homes: React.FC = () => {
  const params = useParams<{ page?: string }>();
  const page = params.page?.toLowerCase();
  const Component = page ? componentMap[page] : null;

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {Component ? <Component /> : <div>Home</div>}
      </Suspense>
    </div>
  );
};

export default Homes;
