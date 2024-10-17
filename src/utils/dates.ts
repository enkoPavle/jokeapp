import dayjs from "dayjs"

export const isSameDayUnix = (date1: number, date2: number) => {
  return dayjs(date1).isSame(dayjs(date2), "day")
}
