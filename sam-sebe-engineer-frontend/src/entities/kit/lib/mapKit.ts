import type { KitDto } from "../api/types";
import type {
  ComponentId,
  InstructionId,
  Kit,
  KitId,
  Url,
} from "../model/types";

export function mapKit(dto: KitDto): Kit {
  return {
    kitId: dto.kitId as KitId,
    title: dto.title,
    description: dto.description,
    shortDescription: dto.shortDescription,
    images: dto.images as Url,
    componentIds: dto.componentIds as ComponentId[],
    instructionIds: dto.instructionIds as InstructionId[],
  };
}
