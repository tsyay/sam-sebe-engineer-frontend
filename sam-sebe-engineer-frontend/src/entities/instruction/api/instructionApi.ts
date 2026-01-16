import { apiClient } from "../../../shared";
import { uploadApi } from "../../../shared";
import { mapInstruction } from "../lib/mapInstruction";
import { mapStep } from "../lib/mapStep";
import type { Instruction } from "../model/types";
import type { Step } from "../model/Step";
import type { InstructionCreateDto, InstructionCreateInput, InstructionDto } from "./types";

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

  async create(input: InstructionCreateInput): Promise<Instruction> {
  const previewImageUrl = input.previewFile
    ? (await uploadApi.instructionImage(input.previewFile)).url
    : "";

  const stepImageUrls = await Promise.all(
    (input.steps ?? []).map(async (_, index) => {
      const f = input.steps?.[index];
      return f.file ? (await uploadApi.instructionImage(f.file)).url : "";
    })
  );

  const dto: InstructionCreateDto = {
    title: input.title,
    description: input.description,
    previewImage: previewImageUrl,
    steps: input.steps.map((s, index) => ({
      title: s.title,
      description: s.description,
      order: index + 1,
      image: stepImageUrls[index] || "",
    })),
    componentIds: input.componentIds || [],
  };

  const response = await apiClient.post<InstructionDto>(`/instructions`, dto);
  return mapInstruction(response);
}

};