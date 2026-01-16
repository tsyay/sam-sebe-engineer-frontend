import { useState } from "react";
import { useNavigate } from "react-router";
import type { Instruction } from "@/entities/instruction";
import { Button } from "../../../shared/ui/buttons";
import { StepView } from "./StepView";

interface InstructionViewerProps {
  instruction: Instruction;
}

export const InstructionViewer = ({ instruction }: InstructionViewerProps) => {
  const navigate = useNavigate();

  const steps = instruction.steps ?? [];
  const [stepIndex, setStepIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const isLastStep = stepIndex >= steps.length - 1;

  const handleNextStep = () => {
    if (steps.length === 0) return;

    if (isLastStep) {
      setIsFinished(true);
      return;
    }

    setStepIndex((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStepIndex((prev) => Math.max(0, prev - 1));
    if (isFinished) setIsFinished(false);
  };

  const redirectToInstructions = () => {
    navigate("/instructions", { replace: true });
  };

  if (steps.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <p className="text-[20px] font-light">У этой инструкции нет шагов</p>
        <Button onClick={redirectToInstructions}>Все инструкции</Button>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <StepView step={steps[stepIndex]} />

      <div className="flex flex-row justify-center gap-3 mt-6">
        <Button onClick={handlePrevStep} disabled={stepIndex === 0}>
          Предыдущий
        </Button>

        {isFinished ? (
          <Button onClick={redirectToInstructions}>Все инструкции</Button>
        ) : (
          <Button onClick={handleNextStep}>
            {isLastStep ? "Завершить" : "Следующий"}
          </Button>
        )}
      </div>
    </div>
  );
};
