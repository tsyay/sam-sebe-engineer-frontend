export type StepId = Brand<number, 'StepId'>
export type InstructionId = Brand<number, 'InstructionId'>
export type Url = string & { __brand: 'Url' }

export interface Step {
  stepId: StepId;
  image: Url;
  title: string;
  description: string;
  instructionId: InstructionId;
}
