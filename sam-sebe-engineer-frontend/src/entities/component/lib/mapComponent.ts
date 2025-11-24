import type { ComponentDto } from "../api/types";
import type { Component, ComponentId, HexColor } from "../model/types";
import { makeUrl } from "../../../shared";
export function mapComponent(dto: ComponentDto): Component {
  return {
    componentId: dto.componentId as ComponentId,
    title: dto.title,
    description: dto.description,
    image: makeUrl(dto.image),
    backgroundColor: dto.backgroundColor as HexColor,
  };
}
