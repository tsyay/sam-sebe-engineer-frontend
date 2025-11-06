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

  async create(instruction: Instruction, file?: File): Promise<Instruction> {
    // Конвертируем в DTO
    const dto: InstructionCreateDto = {
      title: instruction.title,
      description: instruction.description,
      previewImage: instruction.previewImage as string || '', // ✅ ИСПРАВЛЕНО: гарантируем строку
      steps: instruction.steps.map((step, index): StepCreateDto => ({
        title: step.title,
        description: step.description,
        order: index + 1,
        image: step.image as string || '' // ✅ ИСПРАВЛЕНО: гарантируем строку
      })),
      componentIds: instruction.componentIds || []
    };

    // Загружаем изображение если есть
    if (file) {
      const uploadResponse = await uploadApi.instructionImage(file);
      dto.previewImage = uploadResponse.url; // ✅ Теперь точно строка
    }

    console.log('📨 Sending instruction DTO to backend:', dto);
    
    const response = await apiClient.post<InstructionDto>(`/instructions`, dto);
    return mapInstruction(response);
  },
};