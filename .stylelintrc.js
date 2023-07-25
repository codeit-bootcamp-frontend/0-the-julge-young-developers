module.exports = {
  extends: [
    'stylelint-config-standard-scss', // scss 표준 규칙
    'stylelint-config-prettier-scss', // prettier 와의 충돌 방지
    'stylelint-config-property-sort-order-smacss', // smacss 스타일 가이드에 따른 스타일 순서
  ],
  rules: {
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
  },
}
