import type { Instruction } from "../model/Instruction";
import type { InstructionCreateDto, StepCreateDto } from "../api/types";
import { unbrand } from "../../../shared/lib/brandUtils";

export const mapInstructionToCreateDto = (
  model: Instruction
): InstructionCreateDto => {
  return {
    title: model.title,
    description: model.description,
    previewImage: model.previewImage ? unbrand(model.previewImage) : undefined,
    componentIds: model.componentIds?.map((c) => unbrand(c)),
    steps: model.steps.map<StepCreateDto>((s, index) => ({
      title: s.title,
      description: s.description,
      order: index,
      image: s.image ? unbrand(s.image) : undefined,
    })),
  };
};
