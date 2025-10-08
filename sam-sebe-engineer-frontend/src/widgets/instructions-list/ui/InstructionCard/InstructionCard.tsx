import { Link } from "react-router";
import type { Instruction, Component } from "../../../../entities";
import { componentApi } from "../../../../entities";
import { ComponentBadgeRow } from "../ComponentsBadgeRow";
import { useState } from "react";

interface InstructionCardProps {
  instruction: Instruction;
}

export const InstructionCard = ({ instruction }: InstructionCardProps) => {
  const [components, setComponents] = useState<Component[]>();

  componentApi.getAll().then((allComponents) => {
    setComponents(allComponents);
  });

  return (
    <Link
      to={`/instructions/${instruction.instructionId}`}
      className="flex flex-col gap-1"
    >
      <img
        src={instruction.previewImage}
        className="h-[256px] object-contain"
      />
      <h3 className="text-[24px]">{instruction.title}</h3>
      {components && <ComponentBadgeRow components={components} />}
      <p className="font-light text-justify line-clamp-7">
        {instruction.description}
      </p>
    </Link>
  );
};
