import type { Instruction } from "@/entities/instruction";
import { useInstructions } from "@/entities/instruction";
import { InstructionCard } from "../../ui/InstructionCard/InstructionCard";

interface InstructionsListProps {
  instructions?: Instruction[];
}

export const InstructionsList = ({ instructions }: InstructionsListProps) => {
  const {
    data: fetchedInstructions = [],
    isLoading,
    error,
  } = useInstructions();

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки 😢</p>;

  const dataToRender = instructions ?? fetchedInstructions;

  return (
    <div className="w-full h-full ">
      <div className="grid grid-cols-3 gap-3">
        {dataToRender.map((instruction, index) => (
          <InstructionCard key={index} instruction={instruction} />
        ))}
      </div>
    </div>
  );
};
