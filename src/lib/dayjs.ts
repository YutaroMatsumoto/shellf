import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import isToday from 'dayjs/plugin/isToday'

dayjs.extend(isToday)
dayjs.locale('ja')

export default dayjs
