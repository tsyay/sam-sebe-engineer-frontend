import { Link } from "react-router";
import type { Instruction } from "../../../../entities";
import { getComponentsForInstruction } from "../../../../shared";
import { ComponentBadgeRow } from "../ComponentsBadgeRow";

interface InstructionCardProps {
  instruction: Instruction;
}

export const InstructionCard = ({ instruction }: InstructionCardProps) => {
  const components = getComponentsForInstruction(instruction);

  return (
    <Link
      to={`/instructions/${instruction.instructionId}`}
      className="flex flex-col gap-3"
    >
      <h3 className="text-[24px]">{instruction.title}</h3>
      {components && <ComponentBadgeRow components={components} />}
      <p className="font-light text-justify">{instruction.description}</p>
    </Link>
  );
};
