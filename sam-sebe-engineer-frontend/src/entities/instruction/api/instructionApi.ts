import { apiClient, uploadApi } from "../../../shared";
import { mapInstruction } from "../lib/mapInstruction";
import { mapStep } from "../lib/mapStep";
import type { Instruction } from "../model/Instruction";
import type { Step } from "../model/Step";
import type { InstructionCreateDto } from "./types";
import { mapInstructionToCreateDto } from "../lib/mapInstrutionToDto";
import type { InstructionDto } from "./types";

export const instructionApi = {
  async getAll(): Promise<Instruction[]> {
    const data = await apiClient.get<Instruction[]>(`/instructions`);
    return data.map(mapInstruction);
  },

  async getById(id: number): Promise<Instruction> {
    const data = await apiClient.get<Instruction>(`/instructions/${id}`);
    return mapInstruction(data);
  },

  async getByIds(ids: number[]): Promise<Instruction> {
    const data = await apiClient.get<Instruction>(
      `/instructions/by-ids/${ids.join(",")}`
    );
    return mapInstruction(data);
  },

  async getSteps(id: number): Promise<Step[]> {
    const data = await apiClient.get<Step[]>(`/instructions/${id}/`);
    return data.map(mapStep);
  },

  async create(instruction: Instruction, file?: File): Promise<Instruction> {
    const dto = mapInstructionToCreateDto(instruction);

    if (file) {
      const { url } = await uploadApi.instructionImage(file);
      dto.previewImage = url;
    }
    const data = await apiClient.post<InstructionDto>(`/instructions`, dto);
    return mapInstruction(data);
  },
};
