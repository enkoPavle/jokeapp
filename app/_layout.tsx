import {useEffect} from "react"
import {SafeAreaProvider} from "react-native-safe-area-context"
import {useFonts} from "expo-font"
import {Stack} from "expo-router"
import * as SplashScreen from "expo-splash-screen"

import store, {persistor} from "@/store"

import {Provider as ReduxProvider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"

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
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider value={theme}>
          <SafeAreaProvider>
            <Stack>
              <Stack.Screen name="(tabs)" options={{headerShown: false}} />
              <Stack.Screen name="+not-found" />
            </Stack>
          </SafeAreaProvider>
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  )
}
