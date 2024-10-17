import {StyleSheet, View} from "react-native"

import {Text} from "@/shared/components"
import {JokeLikeToggleButton} from "@/shared/components/joke-like-toggle-button"
import {useActions} from "@/shared/hooks"

import {useTodayJoke} from "./hooks/use-today-joke"

export const TodayScreen = () => {
  const {data, isLoading, isError} = useTodayJoke()
  const {toggleJokeLike} = useActions()

  return (
    <View style={styles.container}>
      {isLoading && (
        <Text size="md" center>
          Hang tight! We're fetching today's joke for you...
        </Text>
      )}
      {isError && (
        <Text size="md" center>
          Oops! Something went wrong.
        </Text>
      )}
      {data ? (
        <>
          <Text size="md">{data.joke ?? `${data.setup} ${data.delivery}`}</Text>
          <JokeLikeToggleButton
            id={data.id}
            isLiked={data.isLiked}
            onPress={toggleJokeLike}
          />
        </>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 16,
    paddingHorizontal: 24
  }
})
