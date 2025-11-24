import { apiClient } from "../../../shared";
import { uploadApi } from "../../../shared";
import { mapInstruction } from "../lib/mapInstruction";
import { mapStep } from "../lib/mapStep";
import type { Instruction } from "../model/types";
import type { Step } from "../model/Step";
import type { InstructionCreateDto, InstructionDto, StepCreateDto } from "./types";

export const instructionApi = {
  async getAll(): Promise<Instruction[]> {
    const data = await apiClient.get<InstructionDto[]>(`/instructions`);
    return data.map(mapInstruction);
  },

  async getById(id: number): Promise<Instruction> {
    const data = await apiClient.get<InstructionDto>(`/instructions/${id}`);
    return mapInstruction(data);
  },

  async getByIds(ids: number[]): Promise<Instruction[]> {
    const data = await apiClient.get<InstructionDto[]>(`/instructions/by-ids/${ids.join(",")}`);
    return data.map(mapInstruction);
  },

  async getSteps(id: number): Promise<Step[]> {
    const data = await apiClient.get<any[]>(`/instructions/${id}/steps`);
    return data.map(mapStep);
  },

  async create(
  instruction: Instruction,
  file?: File,
  stepFiles: (File | null)[] = []
): Promise<Instruction> {
  // 1. Загружаем превью (как и раньше)
  let previewImageUrl = (instruction.previewImage as string) || '';

  if (file) {
    const uploadResponse = await uploadApi.instructionImage(file);
    previewImageUrl = uploadResponse.url;
  }

  // 2. Загружаем картинки шагов
  //    индекс в stepFiles соответствует индексу в instruction.steps
  const stepImageUrls: string[] = await Promise.all(
    instruction.steps.map(async (step, index) => {
      const stepFile = stepFiles[index];

      // если файла нет — оставляем то, что уже было (строка) или пустую
      if (!stepFile) {
        return (step.image as string) || '';
      }

      // используем тот же uploadApi, что и для превью
      const uploadResponse = await uploadApi.instructionImage(stepFile);
      return uploadResponse.url;
    })
  );

  // 3. Собираем DTO для бэка
  const dto: InstructionCreateDto = {
    title: instruction.title,
    description: instruction.description,
    previewImage: previewImageUrl,
    steps: instruction.steps.map((step, index): StepCreateDto => ({
      title: step.title,
      description: step.description,
      order: index + 1,
      image: stepImageUrls[index] || '' // тут уже УЖЕ url, а не ""
    })),
    componentIds: instruction.componentIds || []
  };

  console.log('📨 Sending instruction DTO to backend:', dto);

  const response = await apiClient.post<InstructionDto>(`/instructions`, dto);
  return mapInstruction(response);
},

};