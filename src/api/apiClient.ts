// api/apiClient.ts
import axiosInstance from './axiosConfig';

export const fetchData = async <T>(endpoint: string, params?: Record<string, any>): Promise<T> => {
  const response = await axiosInstance.get(endpoint, {
    params
  });
  return response.data;
};

export const fetchItemById = async <T>(endpoint: string, id: string): Promise<T> => {
  const response = await axiosInstance.get(`${endpoint}/${id}`);
  return response.data;
};

export const postData = async <T>(
  endpoint: string,
  data: T,
  params?: Record<string, any>
): Promise<T> => {
  const response = await axiosInstance.post(endpoint, data, { params });
  return response.data;
};

export const updateData = async <T>(endpoint: string, id: string | number, data: T): Promise<T> => {
  const response = await axiosInstance.put(`${endpoint}/${id}`, data);
  return response.data;
};

// For Delete
export const deleteData = async (endpoint: string, id: string): Promise<void> => {
  const response = await axiosInstance.delete(`${endpoint}/${id}`);
  return response.data;
};