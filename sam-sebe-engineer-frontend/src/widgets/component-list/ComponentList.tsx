import type { Component } from "../../entities";
import { componentApi } from "../../entities/component";
import { ComponentCard } from "./ui";
import { useState, useEffect } from "react";
import { useComponents } from "../../entities";

interface ComponentListProps {
  components: Component[];
}

export const ComponentList = ({ components }: ComponentListProps) => {
  const [fetchedComponents, setFetchedComponents] = useState<Component[]>([]);
  const { data, isLoading, error, refetch } = useComponents();
  
  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки данных 😢</p>;

  const dataToRender = components ?? data;

  return (
    <div className="w-full grid grid-cols-6 gap-3">
      {dataToRender.map((component, index) => (
        <ComponentCard key={index} component={component} />
      ))}
    </div>
  );
};
