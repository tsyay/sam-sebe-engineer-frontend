export type InstructionDto = {
  instructionId: number;
  title: string;
  description: string;
  componentIds?: number[];
  previewImage?: string;
  steps: StepDto[];
};

export type StepDto = {
  stepId: number;
  image: string;
  title: string;
  description: string;
  instructionId: number;
};

export type StepCreateDto = {
  title: string
  description: string
  order: number
  image?: string
}

export type InstructionCreateDto = {
  title: string
  description: string
  componentIds?: number[]
  previewImage?: string
  steps: StepCreateDto[]
}