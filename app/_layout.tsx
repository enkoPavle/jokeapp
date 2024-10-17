import {useEffect} from "react"
import {SafeAreaProvider} from "react-native-safe-area-context"
import {Stack} from "expo-router"
import * as SplashScreen from "expo-splash-screen"

import store, {persistor} from "@/store"

import {Provider as ReduxProvider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"

import "react-native-reanimated"

import {theme} from "@/constants/colors"
import {
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts
} from "@expo-google-fonts/inter"
import {ThemeProvider} from "@react-navigation/native"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

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
