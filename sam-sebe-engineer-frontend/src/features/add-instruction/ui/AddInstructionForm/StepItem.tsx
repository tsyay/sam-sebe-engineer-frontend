import TextareaAutosize from "react-textarea-autosize";
import type { UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";

import { Button } from "@/shared/ui/buttons";
import { FileInputWithPreview } from "@/shared/ui";

import type { InstructionForm } from "../../model/types";

interface StepItemProps {
  index: number;
  register: UseFormRegister<InstructionForm>;
  setValue: UseFormSetValue<InstructionForm>;
  watch: UseFormWatch<InstructionForm>;
  onRemove: () => void;
  disabled?: boolean;
}

export const StepItem = ({
  index,
  register,
  setValue,
  watch,
  onRemove,
  disabled,
}: StepItemProps) => {
  const stepImage = watch(`steps.${index}.image`);

  return (
    <div className="w-full flex flex-col rounded-[30px] bg-white drop-shadow-lg p-4 md:min-h-[444px]">
      <p className="text-[24px]">Шаг №{index + 1}</p>

      <div className="w-full flex flex-col gap-3 md:flex-row overflow-hidden">
        <div className="flex-1 flex flex-col gap-3">
          <p className="text-[18px] font-light">Название шага</p>
          <input
            className="w-full bg-white drop-shadow-lg rounded-[30px] p-4"
            type="text"
            {...register(`steps.${index}.title`, { required: true })}
            placeholder="Введите название шага"
          />

          <p className="text-[18px] font-light">Описание</p>
          <TextareaAutosize
            {...register(`steps.${index}.description`, { required: true })}
            minRows={6}
            maxRows={10}
            className="w-full bg-white rounded-[30px] p-4"
            placeholder="Опишите данный шаг"
          />
        </div>

        <div className="flex-1">
          <FileInputWithPreview
            file={stepImage}
            onFileChange={(file) => setValue(`steps.${index}.image`, file)}
          />
        </div>
      </div>

      <Button
        type="button"
        onClick={onRemove}
        className="mt-2 self-end"
        disabled={disabled}
      >
        Удалить шаг
      </Button>
    </div>
  );
};
