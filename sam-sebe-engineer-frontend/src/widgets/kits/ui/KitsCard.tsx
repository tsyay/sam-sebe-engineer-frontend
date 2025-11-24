import { useState } from "react";
import type { Kit } from "../../../entities/kit";
import { Collapsible, getImageUrl } from "../../../shared";
import { ComponentList } from "../../component-list";
import { InstructionsList } from "../../instructions-list";
import {
  componentApi,
  instructionApi,
  useComponents,
  useInstructions,
  type Component,
  type Instruction,
} from "../../../entities";
import { Navigate } from "react-router";

interface KitsCardProps {
  kit: Kit;
}

export const KitsCard = ({ kit }: KitsCardProps) => {
  const {
    data: instructions = [],
    isLoading: isInstructionsLoading,
    error: instructiinsError,
  } = useInstructions();
  const {
    data: components = [],
    isLoading: isComponentsLoading,
    error: componentsError,
  } = useComponents();

  if (isInstructionsLoading || isComponentsLoading) return <p>Загрузка...</p>;
  if (instructiinsError || componentsError) return <p>Ошибка загрузки 😢</p>;

  if (!components || !instructions) return <Navigate to="/404" replace />;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-[36px]">{kit.title}</h2>
          <p className=" text-[18px] font-light text-justify">
            {kit.description}
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img className="max-h-[440px]" src={kit.images} />
        </div>
      </div>
      <div>
        <Collapsible title="Инструкции">
          <InstructionsList instructions={instructions} />
        </Collapsible>
      </div>
      <div>
        <Collapsible title="Состав">
          <ComponentList components={components} />
        </Collapsible>
      </div>
    </div>
  );
};
