import axios from 'axios'

import { PresingedUrlResponse } from '@/libs/shared/api/types/type-image'

import { postRequest } from '../common'

/**
 * Presigned URL 생성 api
 * 
 * @example 
 *  ```
 *  const presignedURL = await createPresignedURL('eva-shop')
    ```
 * @param name : 이미지 title (string)
 * @returns void
 * 
 */
const createPresignedURL = async (name: string): Promise<string | Error> => {
  try {
    const response = await postRequest<PresingedUrlResponse>('/images', {
      name,
    })

    return response.item.url
  } catch (error) {
    return error as Error
  }
}

/**
 * S3로 이미지 업로드api
 * 
 * @example 
 *  ```
    ```
 * @param presignedURL : presignedURL url (string)
 * @param file : 이미지 file (File)
 * @returns void
 * 
 */
const uploadImageToS3 = async (
  url: string,
  file: File,
): Promise<number | Error> => {
  try {
    const response = await axios.put(url, file)
    return response.status
  } catch (error) {
    return error as Error
  }
}

/**
 * 이미지 업로드 total api
 * 
 * @example 
 * const presignedUrl = await uploadImage(file)
 * 
 * @example 에러처리
 *     if (response instanceof Error) {
        // 알 수 없는 에러 처리 
      }  else { // 성공시
        // presigndUrl string 반환
      }
 *  ```
    ```
 * @param name 
 * 
 */
const uploadImage = async (file: File): Promise<string | Error> => {
  const presignedURL = await createPresignedURL(file.name)
  if (presignedURL instanceof Error || !presignedURL) return presignedURL
  const uploadStatus = await uploadImageToS3(presignedURL, file)

  if (
    uploadStatus instanceof Error ||
    !(uploadStatus >= 200 && uploadStatus < 300)
  ) {
    return new Error()
  }

  return presignedURL
}

export default uploadImage
