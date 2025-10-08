import type { ElectronicComponent } from "../../entities/component/model/ElectronicComponent";

const API_BASE_URL = 'http://localhost:3001/api';

export const componentsApi = {
  // Получить все электронные компоненты
  async getAllElectronicComponent(): Promise<ElectronicComponent[]> {
    const response = await fetch(`${API_BASE_URL}/components`);
    if (!response.ok) {
      throw new Error('Failed to fetch components');
    }
    return response.json();
  },

  // Получить электронный компонент по id
  async getElectronicComponentById(id: number): Promise<ElectronicComponent> {
    const response = await fetch(`${API_BASE_URL}/components/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch component');
    }
    return response.json();
  },

  // Получить компоненты по массиву id
  async getElectronicComponentByIds(ids: number[]): Promise<ElectronicComponent[]> {
    const response = await fetch(`${API_BASE_URL}/components/by-ids/${ids.join(',')}`);
    if (!response.ok) {
      throw new Error('Failed to fetch components');
    }
    return response.json();
  }
};