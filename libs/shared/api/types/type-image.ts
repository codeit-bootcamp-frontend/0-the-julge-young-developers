import { Links } from './type-user'

export interface PresingedUrlResponse {
  item: {
    url: string // Presigned URL
  }
  links: Links[]
}
