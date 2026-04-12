import { SplashScreen, Stack } from "expo-router"
import { useFonts } from "expo-font"

import "@/global.css"
import { useEffect } from "react"
import sansBold from "@/assets/fonts/PlusJakartaSans-Bold.ttf"
import sansExtraBold from "@/assets/fonts/PlusJakartaSans-ExtraBold.ttf"
import sansLight from "@/assets/fonts/PlusJakartaSans-Light.ttf"
import sansMedium from "@/assets/fonts/PlusJakartaSans-Medium.ttf"
import sansRegular from "@/assets/fonts/PlusJakartaSans-Regular.ttf"
import sansSemiBold from "@/assets/fonts/PlusJakartaSans-SemiBold.ttf"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "sans-bold": sansBold,
    "sans-extrabold": sansExtraBold,
    "sans-light": sansLight,
    "sans-medium": sansMedium,
    "sans-regular": sansRegular,
    "sans-semibold": sansSemiBold,
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }
  return <Stack screenOptions={{ headerShown: false }} />
}
