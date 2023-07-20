export const META_ROOT = {
  title: {
    template: '%s : The Julge',
    default: 'The Julge',
  },
  description:
    '급하게 일손이 필요한 자리에 더 많은 시급을 제공해서 아르바이트생을 구할 수 있는 서비스',
}

export const META_SIGNIN = {
  title: '로그인',
}

export const META_SIGNUP = {
  title: '회원 가입',
}

export const META_HOME = {
  title: '홈',
}

export const META_DETAIL = {
  title: '공고 상세',
}

export const META_MY_PROFILE = {
  title: '내 프로필',
}

export const META_MY_SHOP = {
  title: '내 가게',
}

export const META_MY_SHOP_NOTICE = {
  title: '내 가게 - 공고 상세',
}

export const generateSharedMetadata = async function generateMetadata({
  searchParams,
}: {
  searchParams: { keyword: string }
}) {
  const { keyword } = searchParams
  return {
    title: `${keyword} - 검색결과`,
  }
}
