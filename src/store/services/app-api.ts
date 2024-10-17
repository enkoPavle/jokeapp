import {API_URL} from "@/constants/enviroments"
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL
  }),
  endpoints: () => ({})
})
