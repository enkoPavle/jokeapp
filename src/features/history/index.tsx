import {useCallback} from "react"
import {StyleSheet, View} from "react-native"

import {useActions} from "@/shared/hooks"
import {useAppSelector} from "@/store"

import {HistoryListEmpty} from "./components/history-list-empty"
import {HistoryListItem} from "./components/history-list-item"
import {HistoryListSeparator} from "./components/history-list-separator"

import {FlashList} from "@shopify/flash-list"

import {Joke} from "@/types/jokes"

export const HistoryScreen = () => {
  const jokesList = useAppSelector((state) => state.jokes.history)
  const {toggleJokeLike} = useActions()

  const onPress = useCallback((id: Joke["id"]) => {
    toggleJokeLike(id)
  }, [])

  const SeparatorComponent = useCallback(() => {
    return <HistoryListSeparator />
  }, [])

  const ListEmptyComponent = useCallback(() => {
    return <HistoryListEmpty />
  }, [])

  return (
    <View style={styles.container}>
      <FlashList
        data={jokesList}
        renderItem={({item}) => (
          <HistoryListItem key={item.id.toString()} {...item} onPress={onPress} />
        )}
        ItemSeparatorComponent={SeparatorComponent}
        ListEmptyComponent={ListEmptyComponent}
        estimatedItemSize={152}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
