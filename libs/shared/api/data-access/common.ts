/* eslint-disable @typescript-eslint/no-explicit-any */
import { InternalAxiosRequestConfig } from 'axios'

import { CommonResponse } from '@/libs/shared/api/types/type-instance'

import { instance } from './instance'

/* get 요청 */
export const getRequest = async <T>(
  url: string,
  config?: InternalAxiosRequestConfig,
): Promise<T> => {
  const response = await instance.get<CommonResponse<T>>(url, config)
  return response.data
}

// /* post 요청 */
export const postRequest = async <T>(
  url: string,
  data: any,
  config?: InternalAxiosRequestConfig,
): Promise<T> => {
  const response = await instance.post<CommonResponse<T>>(url, data, config)
  return response.data
}

/* delete 요청 */
export const deleteRequest = async <T>(
  url: string,
  config?: InternalAxiosRequestConfig,
): Promise<T> => {
  const response = await instance.delete<CommonResponse<T>>(url, config)
  return response.data
}

/* put 요청 */
export const putRequest = async <T>(
  url: string,
  data: any,
  config?: InternalAxiosRequestConfig,
): Promise<T> => {
  const response = await instance.put<CommonResponse<T>>(url, data, config)
  return response.data
}

/* patch 요청 */
export const patchRequest = async <T>(
  url: string,
  data: any,
  config?: InternalAxiosRequestConfig,
): Promise<T> => {
  const response = await instance.patch<CommonResponse<T>>(url, data, config)
  return response.data
}
