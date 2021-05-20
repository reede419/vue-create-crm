// Use in Navbar -  date
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
import store from '../store'


export default function dateFilter(value, format = 'date') {
  const options = {}

  if( format.includes('date') ) {
    options.day = '2-digit'
    options.month = 'long'
    options.year = 'numeric'
  }

  if( format.includes('time') ) {
    options.hour = '2-digit'
    options.minute = '2-digit'
    options.second = '2-digit'
  }

  const locale = store.getters.info.locale || 'ru-RU'

  return new Intl.DateTimeFormat(locale, options).format(new Date(value))
}
