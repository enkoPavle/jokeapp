import React from "react"
import {StyleSheet, View} from "react-native"

import {Text} from "@/shared/components"
import {JokeLikeToggleButton} from "@/shared/components/joke-like-toggle-button"

import {Joke} from "@/types/jokes"

interface Props extends Joke {
  onPress: (id: Joke["id"]) => void
}
export const HistoryListItem: React.FC<Props> = ({
  id,
  setup,
  delivery,
  isLiked,
  onPress
}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{`${setup} ${delivery}`}</Text>
    <JokeLikeToggleButton id={id} isLiked={isLiked} onPress={onPress} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 24
  },
  text: {
    flexShrink: 1,
    paddingRight: 20
  }
})
