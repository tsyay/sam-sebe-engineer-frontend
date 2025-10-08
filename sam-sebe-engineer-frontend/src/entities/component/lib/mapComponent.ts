import type { ComponentDto } from "../api/types";
import type { Component, ComponentId, Url, HexColor } from "../model/types";

export function mapComponent(dto: ComponentDto) : Component {
    return {
        componentId: dto.componentId as ComponentId,
        title: dto.title,
        description: dto.description,
        image: dto.image as Url,
        backgroundColor: dto.backgroundColor as HexColor
    }
}