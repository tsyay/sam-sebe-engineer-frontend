import { useEffect, useState } from "react";
import type { Instruction } from "../../entities";
import { getAllInstructions } from "../../shared";
import { InstructionCard } from "./ui/InstructionCard/InstructionCard";

interface InstructionsListProps {
  instructions?: Instruction[];
}

export const InstructionsList = ({ instructions }: InstructionsListProps) => {
  const [fetchedInstructions, setFetchedInstructions] = useState<Instruction[]>(
    []
  );

  useEffect(() => {
    if (!instructions) {
      const allInstructions = getAllInstructions();
      setFetchedInstructions(allInstructions);
    }
  }, [instructions]);

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
