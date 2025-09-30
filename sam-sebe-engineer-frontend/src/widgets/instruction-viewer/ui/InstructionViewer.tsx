import { useState } from "react";
import { useNavigate } from "react-router";
import type { Instruction } from "../../../entities";
import { Button } from "../../../shared/ui/buttons";
import { StepView } from "./StepView";

interface InstructionViewerProps {
  instruction: Instruction;
}

export const InstructionViewer = ({ instruction }: InstructionViewerProps) => {
  const [step, setStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const navigate = useNavigate();

  const isLastStep = (currentStep: number) =>
    currentStep === instruction.steps.length - 1;

  const handleNextStep = () => {
    if (!isLastStep(step)) {
      setStep((prev) => prev + 1);
    }

    if (isLastStep(step + 1)) {
      finishInstruction();
    }
  };

  const handlePrevStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
      if (isFinished) setIsFinished(false);
    }
  };

  const finishInstruction = () => {
    setIsFinished(true);
  };

  const redirectToInstructions = () => {
    navigate("/instructions", { replace: true });
  };

  return (
    <div className="w-full h-full">
      <StepView step={instruction.steps[step]} />

      <div className="flex flex-row justify-center gap-3 mt-6">
        <Button onClick={handlePrevStep} disabled={step === 0}>
          Предыдущий
        </Button>

        {isFinished ? (
          <Button onClick={redirectToInstructions}>Все инструкции</Button>
        ) : (
          <Button onClick={handleNextStep}>
            {isLastStep(step) ? "Завершить" : "Следующий"}
          </Button>
        )}
      </div>
    </div>
  );
};
