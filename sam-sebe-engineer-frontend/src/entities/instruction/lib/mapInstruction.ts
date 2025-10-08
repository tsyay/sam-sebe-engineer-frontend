import type {
  ComponentId,
  InstructionId,
  Instruction,
  Url,
} from "../model/Instruction";
import type { InstructionDto } from "../api/types";
import type { Step } from "../model/Step";

export function mapInstruction(dto: InstructionDto): Instruction {
  return {
    instructionId: dto.instructionId as InstructionId,
    title: dto.title,
    description: dto.description,
    componentIds: dto.componentIds as ComponentId[],
    previewImage: dto.previewImage as Url,
    steps: dto.steps as Step[],
  };
}
