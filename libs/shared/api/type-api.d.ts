/* eslint-disable @typescript-eslint/no-explicit-any */

/* instance */
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
export interface CommonResponse<T> {
  data: T
  status: number
  statusText: string
}

/* userRequest */

interface Links {
  rel: string
  description: string
  method: string
  href: string
  query?: object[]
  body?: object
}

/* userRequest - signIn */
interface UserSignIn {
  item: {
    token: string
    user: {
      href: string
      item: {
        address: string
        bio: string
        email: string
        id: string
        name: string
        phone: string
        type: 'employee' | 'employer'
      }
    }
  }
  links?: []
}

/* userRequest - signUp */
interface UserSignUp {
  item: {
    id: string
    email: string
    type: 'employee' | 'employer'
  }
  links?: Links[]
}

interface UserShop {
  item: {
    id: string
    name: string
    category: string
    address1: string
    address2: string
    description: string
    imageUrl: string
    originalHourlyPay: number
  }
}

/* userRequest - getUserInfo/updateUserInfo */
interface UserData {
  item: {
    id: string
    email: string
    type: 'employer' | 'employee'
    name?: string
    phone?: string
    address?: string
    bio?: string
    shop: UserShop | null
  }
  links?: Links[]
}
