import type { Step } from "./Step";

export interface Instruction {
  instructionId: number;
  title: string;
  description: string;
  steps: Step[];
}
