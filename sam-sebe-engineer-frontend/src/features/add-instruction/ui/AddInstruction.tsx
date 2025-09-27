import { useFieldArray, useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import { FileInputWithPreview } from "../../../shared/ui";
import { Button } from "../../../shared/ui/buttons";

type StepForm = {
  title: string;
  description: string;
  image: File | null;
};

type InstructionForm = {
  title: string;
  description: string;
  steps: StepForm[];
  image: File | null;
};

export const AddInstruction = () => {
  const { register, control, handleSubmit } = useForm<InstructionForm>();
  const [instructionFile, setInstructionFile] = useState<File | null>(null);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "steps",
  });

  const onSubmit = (data: InstructionForm) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);

    data.steps.forEach((step, index) => {
      formData.append(`steps[${index}][title]`, step.title);
      formData.append(`steps[${index}][description]`, step.description);
      if (step.image) {
        formData.append(`steps[${index}][image]`, step.image); // без [0]
      }
    });

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };
  return (
    <form
      className="flex flex-col pt-[80px] py-[32px] items-start gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-[48px] font-bold">Создание инструкции</h2>
      <div className="w-full h-[444px] flex flex-row gap-3">
        <div className="h-full flex-1 flex flex-col gap-3">
          <p className="text-[24px]">Назвние инструкции</p>
          <input
            className="w-full bg-white rounded-[30px] drop-shadow-lg p-4"
            type="text"
            {...register("title", { required: true })}
          />
          <p className="text-[24px]">Краткое описание</p>
          <TextareaAutosize
            {...register("description")}
            minRows={10}
            maxRows={10}
            className="w-full bg-white rounded-[30px] p-4"
          />
        </div>
        <div className="w-full h-full flex-1">
          <FileInputWithPreview
            file={instructionFile}
            onFileChange={(file) => setInstructionFile(file)}
          />
        </div>
      </div>

      {fields.map((field, index) => (
        <div
          className="w-full h-[444px] flex flex-col rounded-[30px] bg-white drop-shadow-lg p-4"
          key={field.id}
        >
          <p className="text-[24px]">Шаг №{index + 1}</p>
          <div className="w-full h-full flex flex-row gap-3 overflow-hidden">
            <div className="flex-1 flex flex-col gap-3">
              <p className="text-[18px] font-light">Назвние шага</p>
              <input
                className="w-full bg-white drop-shadow-lg rounded-[30px] p-4 z-1"
                type="text"
                {...register(`steps.${index}.title`, { required: true })}
              />
              <p className="text-[18px] font-light">Описание</p>
              <TextareaAutosize
                {...register(`steps.${index}.description`, { required: true })}
                minRows={10}
                maxRows={10}
                className="w-full bg-white rounded-[30px] p-4"
              />
            </div>
            <div className="flex-1 h-full">
              <FileInputWithPreview
                file={instructionFile}
                onFileChange={(file) => setInstructionFile(file)}
              />
            </div>
          </div>
        </div>
      ))}

      <Button
        type="button"
        className="w-full"
        onClick={() => append({ title: "", description: "", image: null })}
      >
        Добавить шаг
      </Button>

      <Button className="w-full" type="submit">
        Сохранить
      </Button>
    </form>
  );
};
