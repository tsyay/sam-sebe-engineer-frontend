import { useInstructions } from "../../../entities/instruction";
import type { Kit } from "../../../entities/Kit";
import { useComponents } from "../../../entities/Kit/model/hooks/useComponentsIds";
import { Collapsible } from "../../../shared";
import { ComponentList } from "../../component-list";
import { InstructionsList } from "../../instructions-list";

interface KitsCardProps {
  kit: Kit;
}

export const KitsCard = ({ kit }: KitsCardProps) => {
  const components = useComponents(kit.componentIds);
  const instructions = useInstructions(kit.instructionIds);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-[36px]">{kit.title}</h2>
          <p className=" text-[18px] font-light text-justify">{kit.description}</p>
        </div>
        <div className="flex-1 flex justify-center">
          <img className="max-h-[440px]" src={kit.images[0]}/>
        </div>
      </div>
      <div>
        <Collapsible title="Инструкции">
          <InstructionsList instructions={instructions}/>
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
