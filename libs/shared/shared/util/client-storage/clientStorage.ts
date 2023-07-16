const checkSSR = () => typeof window === 'undefined'

/**
 *
 * @description 인스턴스 생성은 CSR 내에서 수행해야 합니다. (context를 통해 사용해야 합니다.)
 *
 * @example 사용 예시 (예시 일뿐, context를 사용해야 합니다.)
 * ```
 * const ls = new ClientStorage<string>(
      'recent-application', // key name
      localStorage, // 사용하고 싶은 웹 스토리지
      () => {
        // 에러 처리
        console.log('Error!!')
      },
    )

    ls.set('저장하고 싶은 데이터')
    const data = ls.get()
    console.log(data) // '저장하고 싶은 데이터' 
 * ```
 *
 */
class ClientStorage<T> {
  private key

  private storage

  private onException

  constructor(key: string, storage: Storage, onException?: () => void) {
    this.key = key
    this.storage = storage
    this.onException = onException || (() => {})
  }

  has(): boolean {
    if (checkSSR()) {
      return false
    }

    return Boolean(this.storage.getItem(this.key))
  }

  get(): T | null {
    if (checkSSR()) {
      return null
    }

    const data = this.storage.getItem(this.key)

    if (data) {
      return JSON.parse(data as string)
    }

    this.onException()
    return null
  }

  set(data: T) {
    if (!checkSSR()) {
      this.storage.setItem(this.key, JSON.stringify(data))
    }
  }

  remove() {
    if (!checkSSR()) {
      this.storage.removeItem(this.key)
    }
  }
}

export default ClientStorage
