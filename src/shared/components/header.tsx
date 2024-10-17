import {FC} from "react"
import {StyleSheet, View} from "react-native"
import {useSafeAreaInsets} from "react-native-safe-area-context"

import {Text} from "./text"

import {colors} from "@/constants/colors"

interface Props {
  title?: string
}

export const Header: FC<Props> = ({title}) => {
  const {top} = useSafeAreaInsets()

  return (
    <View style={[styles.container, {paddingTop: top + styles.container.paddingTop}]}>
      <Text size="lg">{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    paddingLeft: 24,
    paddingBottom: 24,
    borderWidth: 1,
    borderColor: colors.lightGray
  }
})
