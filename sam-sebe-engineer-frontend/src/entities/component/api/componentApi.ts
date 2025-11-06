import { apiClient } from "../../../shared";
import type { Component } from "../model/types";
import type { ComponentDto } from "./types";
import { mapComponent } from "../lib/mapComponent";

export const componentApi = {
  async getAll(): Promise<Component[]> {
    const data = await apiClient.get<ComponentDto[]>("/components");
    return data.map(mapComponent);
  },

  async getById(id: number): Promise<Component> {
    const data = await apiClient.get<Component>(`/components/${id}`)
    return mapComponent(data);
  },

  async getByIds(ids: number[]): Promise<Component[]> {
    const data = await apiClient.get<Component[]>(`/components/by-ids/${ids.join(',')}`);
    return data.map(mapComponent);
  }
};
