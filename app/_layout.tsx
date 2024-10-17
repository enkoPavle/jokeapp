import {useEffect} from "react"
import {useFonts} from "expo-font"
import {Stack} from "expo-router"
import * as SplashScreen from "expo-splash-screen"

import "react-native-reanimated"

import {theme} from "@/constants/colors"
import {ThemeProvider} from "@react-navigation/native"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf")
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider value={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  )
}
