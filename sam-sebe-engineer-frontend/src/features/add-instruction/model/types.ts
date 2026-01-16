export type StepForm = {
  title: string;
  description: string;
  image: File | null;
};

export type InstructionForm = {
  title: string;
  description: string;
  steps: StepForm[];
  image: File | null;
};