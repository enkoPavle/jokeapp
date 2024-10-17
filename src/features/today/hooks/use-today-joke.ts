import {useAppSelector} from "@/store"
import {useGetJokesQuery} from "@/store/services"

import {isSameDayUnix} from "@/utils/dates"

import {Joke} from "@/types/jokes"

const checkIsNeedSkipRequest = (todayJoke: Joke | null) => {
  if (todayJoke) return isSameDayUnix(todayJoke.createdAt, Date.now())
  else return false
}

export const useTodayJoke = () => {
  const todayJoke = useAppSelector((state) => state.jokes.today)

  const {isLoading, isError} = useGetJokesQuery(undefined, {
    refetchOnReconnect: true,
    refetchOnFocus: true,
    pollingInterval: 60_000,
    skip: checkIsNeedSkipRequest(todayJoke)
  })

  return {
    data: todayJoke,
    isLoading,
    isError
  }
}
