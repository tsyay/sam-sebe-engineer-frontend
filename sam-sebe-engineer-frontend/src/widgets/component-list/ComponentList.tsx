import type { ElectronicComponent } from "../../entities";
import { getAllElectronicComponents } from "../../shared";
import { ComponentCard } from "./ui";
import { useState, useEffect } from "react";

interface ComponentListProps {
  components: ElectronicComponent[] | undefined;
}

export const ComponentList = ({ components }: ComponentListProps) => {
  const [fetchedComponents, setFetchedComponents] = useState<
    ElectronicComponent[]
  >([]);

  useEffect(() => {
    if (!components) {
      const allComponents = getAllElectronicComponents();
      setFetchedComponents(allComponents);
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
