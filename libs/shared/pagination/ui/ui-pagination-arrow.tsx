import { UiPaginationArrowProps } from '../type-pagination'

export default function UiPaginationArrow({
  able = false,
  direction = 'prev',
}: UiPaginationArrowProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4629 17.4706C13.1701 17.7635 12.6952 17.7635 12.4023 17.4706L5.53048 10.5988C5.38983 10.4582 5.31081 10.2674 5.31081 10.0685C5.31081 9.8696 5.38983 9.67883 5.53048 9.53818L12.4023 2.66637C12.6952 2.37348 13.1701 2.37348 13.4629 2.66637C13.7558 2.95926 13.7558 3.43414 13.4629 3.72703L7.12147 10.0685L13.4629 16.41C13.7558 16.7029 13.7558 17.1778 13.4629 17.4706Z"
        fill={able ? '#111322' : '#A4A1AA'}
        transform={direction === 'next' ? 'rotate(180 10 10)' : undefined}
      />
    </svg>
  )
}
