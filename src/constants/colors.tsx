import {Theme} from "@react-navigation/native"

export const colors = {
  white: "#ffffff",
  lightGray: "#E6E6E6",
  gray: "#C1C3C6",
  black: "#000000",
  lightPurple: "#EAE0FF",
  purple: "#9763FF",
  transparent: "transparent"
}

export const theme: Theme = {
  dark: false,
  colors: {
    primary: colors.white,
    background: colors.white,
    card: colors.white,
    text: colors.black,
    border: colors.purple,
    notification: colors.purple
  }
}
