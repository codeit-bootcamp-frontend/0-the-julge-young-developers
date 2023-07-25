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
interface UserSignInData {
  item: {
    token: string
    user: {
      href: string
      item: {
        address?: string
        bio?: string
        email: string
        id: string
        name?: string
        phone?: string
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
  href: string
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

export type { Links, UserSignInData, UserSignUp, UserShop, UserData }
