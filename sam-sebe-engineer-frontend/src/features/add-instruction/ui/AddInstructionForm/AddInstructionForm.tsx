import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { useNavigate } from "react-router";

import { Button } from "@/shared/ui/buttons";
import { FileInputWithPreview } from "@/shared/ui";
import { instructionApi } from "@/entities/instruction";

import type { InstructionForm } from "../../model/types";
import { StepItem } from "./StepItem";

export const AddInstructionForm = () => {
  const navigate = useNavigate();

  const { register, control, handleSubmit, setValue, watch, reset } =
    useForm<InstructionForm>({
      defaultValues: {
        title: "",
        description: "",
        steps: [],
        image: null,
      },
    });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "steps",
  });

  const instructionImage = watch("image");

  const onSubmit = async (data: InstructionForm) => {
    setIsSubmitting(true);

    try {
      const created = await instructionApi.create({
        title: data.title,
        description: data.description,
        previewFile: data.image,
        steps: data.steps.map((s) => ({
          title: s.title,
          description: s.description,
          file: s.image,
        })),
      });

      reset();
      alert("✅ Инструкция успешно создана!");

      // ✅ Переход: если create вернул id — идём на страницу инструкции,
      // иначе — на список инструкций
      const createdId =
        (created as any)?.id ?? (created as any)?.data?.id ?? null;

      if (createdId) {
        navigate(`/instructions/${createdId}`);
      } else {
        navigate("/instructions");
      }
    } catch (error: any) {
      alert(`❌ Ошибка при создании инструкции: ${error?.message ?? "Unknown error"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="flex flex-col pt-[80px] py-[32px] items-start gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-[48px] font-bold">Создание инструкции</h2>

      <div className="w-full flex flex-col gap-3 md:flex-row md:min-h-[444px]">
        <div className="flex-1 flex flex-col gap-3">
          <p className="text-[24px]">Название инструкции</p>
          <input
            className="w-full bg-white rounded-[30px] drop-shadow-lg p-4"
            type="text"
            {...register("title", { required: true })}
            placeholder="Введите название инструкции"
          />

          <p className="text-[24px]">Краткое описание</p>
          <TextareaAutosize
            {...register("description", { required: true })}
            minRows={6}
            maxRows={10}
            className="w-full bg-white rounded-[30px] p-4 drop-shadow-lg"
            placeholder="Введите описание инструкции"
          />
        </div>

        <div className="flex-1">
          <FileInputWithPreview
            file={instructionImage}
            onFileChange={(file) => setValue("image", file)}
          />
        </div>
      </div>

      {fields.map((field, index) => (
        <StepItem
          key={field.id}
          index={index}
          register={register}
          setValue={setValue}
          watch={watch}
          onRemove={() => remove(index)}
          disabled={isSubmitting}
        />
      ))}

      <Button
        type="button"
        className="w-full"
        disabled={isSubmitting}
        onClick={() => append({ title: "", description: "", image: null })}
      >
        Добавить шаг
      </Button>

      <Button className="w-full" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "🔄 Сохранение..." : "💾 Сохранить инструкцию"}
      </Button>
    </form>
  );
};
