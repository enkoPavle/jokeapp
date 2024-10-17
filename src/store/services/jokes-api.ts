import {appApi} from "./app-api"

import {FetchBaseQueryError} from "@reduxjs/toolkit/query"

import {ErrorJokeResponse, JokeResponse} from "@/types/jokes"

export const jokesApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getJokes: builder.query<JokeResponse, void>({
      queryFn: async (args, api, extraOptions, baseQuery) => {
        const response = await baseQuery({
          url: `/joke/Any`
        })

        if (response.error) {
          return {
            error: {
              status: response.error.status,
              data: response.error.data
            } as FetchBaseQueryError
          }
        }

        const data = response.data as JokeResponse | ErrorJokeResponse

        if (data.error) {
          return {
            error: {
              status: response.meta?.response?.status,
              data: data.error
            } as FetchBaseQueryError
          }
        }

        return {data: data as JokeResponse}
      }
    })
  })
})

export const {useGetJokesQuery} = jokesApi
