import type { Step } from "./Step";
export type InstructionId = Brand<number, "InstructionId">;
export type ComponentId = Brand<number, "ComponentId">;

export interface Instruction {
  instructionId: InstructionId;
  title: string;
  description: string;
  componentIds?: ComponentId[];
  previewImage?: Url;
  steps: Step[];
}
