import { Link } from "react-router";
import type { Instruction } from "../../../../entities";
import { useComponents } from "../../../../entities";
import { ComponentBadgeRow } from "../ComponentsBadgeRow";

interface InstructionCardProps {
  instruction: Instruction;
}

export const InstructionCard = ({ instruction }: InstructionCardProps) => {
  const { data: components = [], isLoading, error } = useComponents();

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки 😢</p>;

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
