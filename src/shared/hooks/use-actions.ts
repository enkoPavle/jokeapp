import {useMemo} from "react"

import {useAppDispatch} from "@/store"
import {toggleJokeLike} from "@/store/features"

import {bindActionCreators} from "@reduxjs/toolkit"

const rootActions = {
  toggleJokeLike
}

export const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
