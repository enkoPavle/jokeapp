import {FC} from "react"
import {StyleSheet, Text as BaseText, type TextProps} from "react-native"

import {colors} from "@/constants/colors"

interface Props extends TextProps {
  size?: "xs" | "sm" | "md" | "lg"
  color?: string
  center?: boolean
}

export const Text: FC<Props> = ({style, size = "md", color, center, ...rest}) => {
  return (
    <BaseText
      style={[
        {
          xs: styles.xs,
          sm: styles.sm,
          md: styles.md,
          lg: styles.lg
        }[size],
        {
          color: color ?? colors.black,
          textAlign: center ? "center" : "left"
        },
        style
      ]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  xs: {
    fontSize: 12,
    fontFamily: "Inter_700Bold"
  },
  sm: {
    fontSize: 16,
    fontFamily: "Inter_500Medium"
  },
  md: {
    fontSize: 24,
    fontFamily: "Inter_600SemiBold"
  },
  lg: {
    fontSize: 36,
    fontFamily: "Inter_700Bold"
  }
})
