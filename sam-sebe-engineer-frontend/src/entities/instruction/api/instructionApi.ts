import { apiClient, uploadApi } from "../../../shared";
import { mapInstruction } from "../lib/mapInstruction";
import { mapStep } from "../lib/mapStep";
import type { Instruction } from "../model/Instruction";
import type { Step } from "../model/Step";
import type { InstructionCreateDto } from "./types";

export const instructionApi = {
  async getAll(): Promise<Instruction[]> {
    const data = await apiClient.get<Instruction[]>(`/instructions`);
    return data.map(mapInstruction);
  },

  async getById(id: number): Promise<Instruction> {
    const data = await apiClient.get<Instruction>(`/instructions/${id}`);
    return mapInstruction(data);
  },

  async getSteps(id: number): Promise<Step[]> {
    const data = await apiClient.get<Step[]>(`/instructions/${id}/`);
    return data.map(mapStep);
  },

  async create(dto: InstructionCreateDto, file?: File): Promise<Instruction> {
    let previewImage = dto.previewImage;

    if (file) {
      const { url } = await uploadApi.instructionImage(file);
      previewImage = url;
    }
    const data = await apiClient.post<Instruction>(`/instructions`, {
      ...dto,
      previewImage,
    });
    return mapInstruction(data);
  },
};
