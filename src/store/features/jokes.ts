import {jokesApi} from "../services"

import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import {Joke} from "@/types/jokes"

const initialState: {
  today: Joke | null
  history: Joke[]
} = {
  today: null,
  history: []
}

export const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {
    toggleJokeLike: (state, {payload}: PayloadAction<Joke["id"]>) => {
      if (state.today?.id === payload) {
        state.today.isLiked = !state.today.isLiked
      }

      const indexInHistory = state.history.findIndex((joke) => joke.id === payload)

      if (indexInHistory !== -1) {
        state.history[indexInHistory].isLiked = !state.history[indexInHistory].isLiked
      }
    }
  },
  extraReducers: (buider) => {
    buider.addMatcher(jokesApi.endpoints.getJokes.matchFulfilled, (state, {payload}) => {
      const joke = {
        ...payload,
        isLiked: false,
        createdAt: Date.now()
      }

      if (state.today?.id !== joke.id) {
        state.today = joke
      }

      if (!state.history.find((joke) => joke.id === joke.id)) {
        state.history.push(joke)
      }
    })
  }
})

export const {toggleJokeLike} = jokesSlice.actions

export default jokesSlice
