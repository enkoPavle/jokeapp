import {appApi} from "./app-api"

import {JokeResponse} from "@/types/jokes"

export const jokesApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getJokes: builder.query<JokeResponse, void>({
      query: () => ({
        url: `/joke/Any`
      })
    })
  })
})

export const {useGetJokesQuery} = jokesApi
