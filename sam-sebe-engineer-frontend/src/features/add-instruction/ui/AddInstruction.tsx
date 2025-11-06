import { useFieldArray, useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import { FileInputWithPreview } from "../../../shared/ui";
import { Button } from "../../../shared/ui/buttons";
import { instructionApi } from "../../../entities/instruction";
import type { Instruction, InstructionId, Step, StepId } from "../../../entities/instruction/model/types";

// Объявляем типы формы
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
  const { register, control, handleSubmit, setValue, watch, reset } = useForm<InstructionForm>({
    defaultValues: {
      title: "",
      description: "",
      steps: [],
      image: null
    }
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
    console.log('🚀 Starting instruction creation via entity...');

    // Создаем временные ID с брендингом
    const tempInstructionId = 0 as InstructionId;
    const tempStepId = 0 as StepId;

    // Создаем объект Instruction для entity слоя
    const instructionData: Instruction = {
      instructionId: tempInstructionId,
      title: data.title,
      description: data.description,
      previewImage: '' as any,
      steps: data.steps.map((step, index): Step => ({
        stepId: tempStepId,
        title: step.title,
        description: step.description,
        image: '' as any,
        instructionId: tempInstructionId
      })),
      componentIds: []
    };

    console.log('📦 Prepared instruction data for entity:', instructionData);

    // ✅ ИСПРАВЛЕНО: Проверяем что файл не null
    const createdInstruction = await instructionApi.create(
      instructionData, 
      data.image || undefined // преобразуем null в undefined
    );

    console.log('✅ Instruction created via entity:', createdInstruction);
    
    // Сбрасываем форму после успешного создания
    reset();
    setValue('image', null);
    
    alert('✅ Инструкция успешно создана!');

  } catch (error: any) {
    console.error('❌ Error creating instruction via entity:', error);
    alert(`❌ Ошибка при создании инструкции: ${error.message}`);
  } finally {
    setIsSubmitting(false);
  }
};

  const handleInstructionFileChange = (file: File | null) => {
    setValue("image", file);
  };

  const handleStepFileChange = (index: number, file: File | null) => {
    setValue(`steps.${index}.image`, file);
  };

  return (
    <form
      className="flex flex-col pt-[80px] py-[32px] items-start gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-[48px] font-bold">Создание инструкции</h2>
      
      <div className="w-full h-[444px] flex flex-row gap-3">
        <div className="h-full flex-1 flex flex-col gap-3">
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
            minRows={10}
            maxRows={10}
            className="w-full bg-white rounded-[30px] p-4 drop-shadow-lg"
            placeholder="Введите описание инструкции"
          />
        </div>
        <div className="w-full h-full flex-1">
          <FileInputWithPreview
            file={instructionImage}
            onFileChange={handleInstructionFileChange}
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
              <p className="text-[18px] font-light">Название шага</p>
              <input
                className="w-full bg-white drop-shadow-lg rounded-[30px] p-4 z-1"
                type="text"
                {...register(`steps.${index}.title`, { required: true })}
                placeholder="Введите название шага"
              />
              <p className="text-[18px] font-light">Описание</p>
              <TextareaAutosize
                {...register(`steps.${index}.description`, { required: true })}
                minRows={10}
                maxRows={10}
                className="w-full bg-white rounded-[30px] p-4"
                placeholder="Опишите данный шаг"
              />
            </div>
            <div className="flex-1 h-full">
              <FileInputWithPreview
                file={watch(`steps.${index}.image`)}
                onFileChange={(file) => handleStepFileChange(index, file)}
              />
            </div>
          </div>
          <Button
            type="button"
            onClick={() => remove(index)}
            className="mt-2 self-end"
          >
            Удалить шаг
          </Button>
        </div>
      ))}

      <Button
        type="button"
        className="w-full"
        onClick={() => append({ title: "", description: "", image: null })}
      >
        Добавить шаг
      </Button>

      <Button 
        className="w-full" 
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "🔄 Сохранение..." : "💾 Сохранить инструкцию"}
      </Button>
    </form>
  );
};