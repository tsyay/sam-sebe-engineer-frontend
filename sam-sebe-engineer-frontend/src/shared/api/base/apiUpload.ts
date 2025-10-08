import { apiClient } from './api-client'

export type UploadResponse = {
  url: string
}

export const uploadApi = {
  async instructionImage(file: File): Promise<UploadResponse> {
    const formData = new FormData()
    formData.append('file', file)

    return apiClient.post<UploadResponse>('/upload/instruction-image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },

  async stepImage(file: File): Promise<UploadResponse> {
    const formData = new FormData()
    formData.append('file', file)

    return apiClient.post<UploadResponse>('/upload/step-image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },

  async kitImage(file: File): Promise<UploadResponse> {
    const formData = new FormData()
    formData.append('file', file)

    return apiClient.post<UploadResponse>('/upload/kit-image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
}
