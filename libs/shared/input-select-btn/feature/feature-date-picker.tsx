'use client'

import { Dispatch, SetStateAction } from 'react'

import classNames from 'classnames/bind'
import ko from 'date-fns/locale/ko'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import styles from './feature-date-picker.module.scss'

const cx = classNames.bind(styles)
export default function DatePice({
  onSelectDate,
  selectedDate,
}: {
  onSelectDate: Dispatch<SetStateAction<Date>>
  selectedDate: Date
}) {
  const handleDateChange = (date: Date) => {
    onSelectDate(date)
    console.log(date)
  }
  return (
    <div className={cx('wrapper')}>
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
      />
    </div>
  )
}
