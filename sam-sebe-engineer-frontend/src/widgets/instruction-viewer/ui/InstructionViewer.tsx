import { useState } from "react";
import type { Instruction } from "../../../entities";
import { Button } from "../../../shared/ui/buttons";
import { StepView } from "./StepView";

interface InstructionViewerProps {
  instruction: Instruction;
}

export const InstructionViewer = ({ instruction }: InstructionViewerProps) => {
  const [step, setStep] = useState(0);

  const handleNextStep = async () => {
    if (instruction.steps[step + 1] !== undefined) {
      setStep((prevStep) => prevStep + 1);
    } else finishInstruction();
  };

  const handlePrevStep = async () => {
    if (instruction.steps[step - 1] !== undefined) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const finishInstruction = () => {};

  return (
    <div className="w-full h-full py-[60px]">
      <h2 className="text-[48px] font-bold">{instruction.title}</h2>
      <StepView step={instruction.steps[step]} />
      <div className="flex flex-row justify-center gap-3">
        <Button onClick={handlePrevStep}>Предыдущий</Button>
        <Button onClick={handleNextStep}>Следующий</Button>
      </div>
    </div>
  );
};
