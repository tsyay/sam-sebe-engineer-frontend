import type {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
} from "axios";

export const requestInterceptor = {
  onFulfilled: (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("auth-token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer: ${token}`;
    }

    if (import.meta.env.DEV) {
      console.log(
        `🚀 [API] ${config.method?.toUpperCase()} ${config.url}`,
        config.data
      );
    }

    return config;
  },

  onRejected: (error: any) => {
    console.error("❌ [API] Request failed:", error);
    return Promise.reject(error);
  },
};

export const responseInterceptor = {
  onFulfilled: (response: AxiosResponse) => {
    if (import.meta.env.DEV) {
      console.log(
        `✅ [API] ${response.status} ${response.config.url}`,
        response.data
      );
    }
    return response;
  },

  onRejected: (error: AxiosError) => {
    if (import.meta.env.DEV) {
      console.error(
        `❌ [API] ${error.response?.status} ${error.config?.url}`,
        error.response?.data
      );
    }

    if (error.response?.status === 401) {
      handleUnauthorizedError();
    }

    if (error.response?.status === 500) {
      handleServerError(error);
    }
  },
};

const handleUnauthorizedError = () => {
  localStorage.removeItem("auth-token");
  console.warn("🛑 Authentication required");
};

const handleServerError = (error: AxiosError) => {
  console.error("💥 Server error:", error.response?.data);
};


export const setupInterceptors = (client: AxiosInstance) => {
    client.interceptors.request.use(
        requestInterceptor.onFulfilled,
        requestInterceptor.onRejected
    )

    client.interceptors.response.use(
        responseInterceptor.onFulfilled,
        responseInterceptor.onRejected
    )
}