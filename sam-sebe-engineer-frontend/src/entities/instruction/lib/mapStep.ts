import { makeUrl } from "../../../shared";
import type { StepDto } from "../api/types";
import type { Step, StepId } from "../model/Step";

export function mapStep(dto: StepDto): Step {
  return {
    stepId: dto.id as StepId,
    image: makeUrl(dto.image ? dto.image: ""),
    title: dto.title,
    description: dto.description,
  };
}
