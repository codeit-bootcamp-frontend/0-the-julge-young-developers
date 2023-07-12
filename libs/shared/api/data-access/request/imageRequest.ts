import axios from 'axios'

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
const createPresignedURL = async (
  name: string,
): Promise<CreatePresignedURLData | string | undefined> => {
  try {
    const response = await postRequest<CreatePresignedURLData>('/images', {
      name,
    })

    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
  }
}

/**
 * S#로 이미지 업로드api
 * 
 * @example 
 *  ```
    ```
 * @param name : 이미지 title (string)
 * @returns void
 * 
 */
const uploadImage = async (url: string, file: File) => {
  const res = await axios.put(url, {
    file,
  })

  return res
}

export { createPresignedURL, uploadImage }
