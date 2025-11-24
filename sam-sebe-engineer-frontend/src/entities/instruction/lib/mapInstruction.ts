import type {
  ComponentId,
  InstructionId,
  Instruction,
} from "../model/Instruction";
import type { InstructionDto } from "../api/types";
import { makeUrl, type Url } from "../../../shared";
import { mapStep } from "./mapStep";

export function mapInstruction(dto: InstructionDto): Instruction {
  console.log(dto.steps)
  return {
    instructionId: dto.instructionId as InstructionId,
    title: dto.title,
    description: dto.description,
    componentIds: dto.componentIds as ComponentId[],
    previewImage: dto.previewImage ? makeUrl(dto.previewImage) : undefined,
    steps: dto.steps.map(mapStep),
  };
}
