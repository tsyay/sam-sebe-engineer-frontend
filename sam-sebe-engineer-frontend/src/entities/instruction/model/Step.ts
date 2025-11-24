import type { Url } from "../../../shared";
export type StepId = Brand<number, 'StepId'>
export type InstructionId = Brand<number, 'InstructionId'>

export interface Step {
  stepId: StepId;
  image?: Url;
  title: string;
  description: string;
  instructionId: InstructionId;
}
