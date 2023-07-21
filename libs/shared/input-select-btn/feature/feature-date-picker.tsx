'use client'

import classNames from 'classnames/bind'
import ko from 'date-fns/locale/ko'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import styles from './feature-date-picker.module.scss'
import './feature-date-picker.scss'

const cx = classNames.bind(styles)
export default function SelectDatePicker({
  variant = 'all',
  onSelectDate,
  selectedDate,
  title,
}: {
  variant?: string
  onSelectDate: (value: Date) => void
  selectedDate: Date | undefined
  title: string
}) {
  const handleDateChange = (date: Date) => {
    onSelectDate(date)
  }
  return (
    <div className={cx('wrapper')}>
      {title}
      <DatePicker
        className={cx('inputBox')}
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText="년/월/일"
        dateFormat="yyyy년 MM월 dd일"
        shouldCloseOnSelect={true}
        locale={ko}
        showMonthDropdown={true}
        showYearDropdown={true}
        dropdownMode="select"
        calendarClassName={cx('calenderWrapper')}
        minDate={variant === 'minToday' ? new Date() : undefined}
      />
    </div>
  )
}
