const fullDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const fullMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const shortDays = number => fullDays[number].slice(0,3)
const shortMonths = number => fullMonths[number].slice(0,3)

export { 
  fullDays, 
  fullMonths,
  shortDays,
  shortMonths
}