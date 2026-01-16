import type { Step } from "@/entities/instruction";

interface StepViewProps {
  step: Step;
}

export const StepView = ({ step }: StepViewProps) => {
  return (
    <div className="flex flex-col gap-4 py-4 md:flex-row md:gap-6">
      {step.image && (
        <div
          className="
            w-full
            h-full
            overflow-hidden
            rounded-[30px]
            bg-gray-100
            md:w-1/2
            flex-shrink-0
          "
        >
          <img
            src={step.image}
            alt={step.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-medium md:text-3xl lg:text-3xl">
          {step.title}
        </h3>

        <p className="text-lg font-light md:text-base lg:text-lg text-gray-600">
          {step.description}
        </p>
      </div>
    </div>
  );
};
