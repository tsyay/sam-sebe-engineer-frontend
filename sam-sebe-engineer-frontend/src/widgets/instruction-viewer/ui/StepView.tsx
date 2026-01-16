import type { Step } from "@/entities/instruction";

interface StepViewProps {
  step: Step;
}

export const StepView = ({ step }: StepViewProps) => {
  return (
    <div className="flex flex-col items-center gap-3 py-3">
      {step.image && (
        <img
          className="max-w-1/3 max-h-1/2 rounded-[30px]"
          src={step.image}
          alt={step.title}
        />
      )}{" "}
      <h3 className="w-full text-[36px] font-medium">{step.title}</h3>
      <p className="w-full text-[20px] font-light">{step.description}</p>
    </div>
  );
};
