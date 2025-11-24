import type { KitDto } from "../api/types";
import type {
  ComponentId,
  InstructionId,
  Kit,
  KitId,
} from "../model/types";
import { makeUrl } from "../../../shared";

export function mapKit(dto: KitDto): Kit {
  return {
    kitId: dto.kitId as KitId,
    title: dto.title,
    description: dto.description,
    shortDescription: dto.shortDescription,
    images: makeUrl(dto.images[0]),
    componentIds: dto.componentIds as ComponentId[],
    instructionIds: dto.instructionIds as InstructionId[],
  };
}
