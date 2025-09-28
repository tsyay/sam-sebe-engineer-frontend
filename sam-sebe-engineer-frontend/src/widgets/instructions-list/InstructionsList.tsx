import { useEffect, useState } from "react";
import type { Instruction } from "../../entities";
import { getAllInstructions } from "../../shared";
import { InstructionCard } from "./ui/InstructionCard/InstructionCard";

export const InstructionsList = () => {
  const [instructions, setInstructions] = useState<Instruction[]>([]);

  useEffect(() => {
    const allInstructions = getAllInstructions();
    setInstructions(allInstructions);
  }, []);

  return (
    <div className="w-full h-full mt-[80px] mb-[40px] drop-shadow-lg bg-white p-6 rounded-[30px]">
      <h2 className="text-[48px] font-bold mb-8">Инструкции</h2>
      <div className="grid grid-cols-3 gap-3">
        {instructions.map((instruction, index) => (
          <InstructionCard key={index} instruction={instruction} />
        ))}
        {instructions.map((instruction, index) => (
          <InstructionCard key={index} instruction={instruction} />
        ))}
      </div>
    </div>
  );
};
