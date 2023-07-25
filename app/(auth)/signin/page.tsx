import { META_SIGNIN } from '@/app/_meta'

import SignIn from '@/libs/signin/feature/signin'

export const metadata = META_SIGNIN

export default function SignInPage() {
  return <SignIn />
}
