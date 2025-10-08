import type { StepDto } from "../api/types";
import type { Step, InstructionId, StepId, Url } from "../model/Step";

export function mapStep(dto: StepDto): Step {
  return {
    stepId: dto.stepId as StepId,
    image: dto.image as Url,
    title: dto.title,
    description: dto.description,
    instructionId: dto.instructionId as InstructionId,
  };
}
