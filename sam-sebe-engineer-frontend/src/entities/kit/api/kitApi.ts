import { apiClient } from "../../../shared";
import { mapKit } from "../lib/mapKit";
import type { Kit } from "../model/types";

export const kitApi = {
  async getAll(): Promise<Kit[]> {
    const data = await apiClient.get<Kit[]>("/kits");
    return data.map(mapKit);
  },

  async getById(id: number): Promise<Kit> {
    const data = await apiClient.get<Kit>(`/kits/${id}`);
    return mapKit(data);
  },

};
