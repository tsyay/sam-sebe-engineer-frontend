import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { setupInterceptors } from './interceptors';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.BASE_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    setupInterceptors(this.client);
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get(url, config);
    return response.data;
  }

  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.post(url, data, config);
    return response.data;
  }

  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.put(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete(url, config);
    return response.data;
  }

  async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.patch(url, data, config);
    return response.data;
  }
}

export const apiClient = new ApiClient();
