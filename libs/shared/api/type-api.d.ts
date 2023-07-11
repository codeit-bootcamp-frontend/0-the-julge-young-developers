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

/* noticeRequest */

/* noticeRequest - getNotices */
interface NoticesProps {
  offset?: number
  limit?: number
  address?: string[]
  keyword?: string
  startsAtGte?: string
  hourlyPayGte?: number
  sort?: 'time' | 'pay' | 'hour' | 'shop'
}

interface NoticesItem {
  item: {
    id: string
    hourlyPay: number
    startsAt: string
    workhour: number
    description: string
    closed: boolean
    shop: {
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
      href: string
    }
  }
  links?: Links[]
}

interface NoticesData {
  offset: number
  limit: number
  address: string[]
  keyword?: string
  items: NoticesItem[]
}

/* noticeRequest - getShopNotices */

interface ShopNoticesProps {
  shopId: string
  offset?: number
  limit?: number
}

interface ShopNoticesItem {
  item: {
    id: string
    hourlyPay: number
    startsAt: string
    workhour: number
    description: string
    closed: boolean
  }
  links?: Links[]
}

interface ShopNoticesData {
  offset: number
  limit: number
  items: ShopNoticesItem[]
  links?: Links[]
}

/* noticeRequest - registerShopNotice */

interface RegisterdShopNoticeProps {
  shopId: string
  hourlyPay: number
  startsAt: string
  workhour: number
  description: string
}

interface RegisterdShopNoticeData {
  item: {
    id: string
    hourlyPay: number
    startsAt: string
    workhour: number
    description: string
    closed: boolean
    shop: {
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
      href: string
    }
  }
  links?: Links[]
}

/* noticeRequest - getShopNotice */

interface ShopNoticeData {
  item: {
    id: string
    hourlyPay: number
    startsAt: string
    workhour: number
    description: string
    closed: boolean
    shop: {
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
      href: string
    }
  }
  links?: Links[]
}
/* noticeRequest - updateShopNotice */
interface UpdatedShopNotice {
  item: {
    id: string
    hourlyPay: number
    startsAt: string
    workhour: number
    description: string
    closed: boolean
    shop: {
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
      href: string
    }
  }
  links?: Links[]
}
