export type InstructionDto = {
  instructionId: number;
  title: string;
  description: string;
  componentIds?: number[];
  previewImage?: string;
  steps: StepDto[];
};

export type StepDto = {
  id: number;
  title: string;
  description: string;
  image?: string | null;
  order: number;
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

export type StepCreateInput = {
  title: string;
  description: string;
  file?: File | null;
};

export type InstructionCreateInput = {
  title: string;
  description: string;
  componentIds?: number[];
  previewFile?: File | null;
  steps: StepCreateInput[];
};