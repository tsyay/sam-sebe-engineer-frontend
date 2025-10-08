import { useState } from "react";
import type { Kit } from "../../../entities/kit";
import { Collapsible } from "../../../shared";
import { ComponentList } from "../../component-list";
import { InstructionsList } from "../../instructions-list";
import { componentApi, instructionApi, type Component, type Instruction } from "../../../entities";

interface KitsCardProps {
  kit: Kit;
}

export const KitsCard = ({ kit }: KitsCardProps) => {
  const [instructions, setInstructions] = useState<Instruction[]>([]);

  instructionApi.getAll().then((allInstructions) => {
    setInstructions(allInstructions);
  });

  const [components, setComponents] = useState<Component[]>([]);

  componentApi.getAll().then((allComponents) => {
    setComponents(allComponents);
  });

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
          <img className="max-h-[440px]" src={kit.images[0]} />
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
