import { apiClient } from './api-client';

export type UploadResponse = {
  url: string;
  success?: boolean;
  message?: string;
  error?: string;
};

export const uploadApi = {
  async instructionImage(file: File): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append('image', file);

    console.log('🔄 Uploading instruction image...');

    try {
      const response = await apiClient.post<UploadResponse>('/upload/instruction-image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('✅ Instruction image uploaded:', response);
      return response;

    } catch (error: any) {
      console.error('❌ Instruction image upload failed:', error);
      throw new Error(error.response?.data?.error || error.message || 'Instruction image upload failed');
    }
  },

  async stepImage(file: File): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append('image', file);

    console.log('🔄 Uploading step image...');

    try {
      const response = await apiClient.post<UploadResponse>('/upload/step-image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('✅ Step image uploaded:', response);
      return response;

    } catch (error: any) {
      console.error('❌ Step image upload failed:', error);
      throw new Error(error.response?.data?.error || error.message || 'Step image upload failed');
    }
  }
};