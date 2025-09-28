import type { Step } from "./Step";
import type { ElectronicComponent } from "../component";

export interface Instruction {
  instructionId: number;
  title: string;
  description: string;
  components?: number[]; 
  previewImage?: string;
  steps: Step[];
}