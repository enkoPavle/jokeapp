import {StyleSheet, View} from "react-native"

import {Text} from "@/shared/components"

export const HistoryListEmpty = () => (
  <View style={styles.container}>
    <Text>History is empty :(</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
})
