import type { Component } from "../../entities";
import { componentApi } from "../../entities/component";
import { ComponentCard } from "./ui";
import { useState, useEffect } from "react";

interface ComponentListProps {
  components: Component[];
}

export const ComponentList = ({ components }: ComponentListProps) => {
  const [fetchedComponents, setFetchedComponents] = useState<Component[]>([]);

  useEffect(() => {
    if (!components) {
      componentApi.getAll().then((allComponents) => {
        setFetchedComponents(allComponents);
      });
    }
  }, [components]);

  const dataToRender = components ?? fetchedComponents;

  return (
    <div className="w-full grid grid-cols-6 gap-3">
      {dataToRender.map((component, index) => (
        <ComponentCard key={index} component={component} />
      ))}
    </div>
  );
};
