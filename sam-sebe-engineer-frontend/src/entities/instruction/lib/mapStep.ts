import { makeUrl } from "../../../shared";
import type { StepDto } from "../api/types";
import type { Step, InstructionId, StepId} from "../model/Step";

export function mapStep(dto: StepDto): Step {
  console.log(dto.imageUrl)
  return {
    stepId: dto.stepId as StepId,
    image: makeUrl(dto.imageUrl),
    title: dto.title,
    description: dto.description,
    instructionId: dto.instructionId as InstructionId,
  };
}
