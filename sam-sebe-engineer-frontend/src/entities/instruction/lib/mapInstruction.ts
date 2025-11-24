import type {
  ComponentId,
  InstructionId,
  Instruction,
} from "../model/Instruction";
import type { InstructionDto } from "../api/types";
import type { Step } from "../model/Step";
import { makeUrl } from "../../../shared";

export function mapInstruction(dto: InstructionDto): Instruction {
  return {
    instructionId: dto.instructionId as InstructionId,
    title: dto.title,
    description: dto.description,
    componentIds: dto.componentIds as ComponentId[],
    previewImage: dto.previewImage ? makeUrl(dto.previewImage) : undefined,
    steps: dto.steps as Step[],
  };
}
