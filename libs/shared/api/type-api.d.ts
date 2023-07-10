/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

type CustomAxiosResponse<T = any> = {
  response?: T
  refreshToken?: string
}

export interface CustomAxiosInterface extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<InternalAxiosRequestConfig>
    response: AxiosInterceptorManager<AxiosResponse<CustomAxiosResponse>>
  }

  get<T>(url: string, config?: InternalAxiosRequestConfig): Promise<T>
  delete<T>(url: string, config?: InternalAxiosRequestConfig): Promise<T>
  post<T>(
    url: string,
    data?: any,
    config?: InternalAxiosRequestConfig,
  ): Promise<T>
  put<T>(
    url: string,
    data?: any,
    config?: InternalAxiosRequestConfig,
  ): Promise<T>
  patch<T>(
    url: string,
    data?: any,
    config?: InternalAxiosRequestConfig,
  ): Promise<T>
}

/* common */

// data 안에 또 data가 있는 경우만 사용하는 타입입니다.
// interface APIDataResponse<T> {
//   data: T
// }

export interface CommonResponse<T> {
  data: T
  status: number
  statusText: string
}
