import { ClerkProvider, useAuth } from "@clerk/expo"
import { tokenCache } from "@clerk/expo/token-cache"
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

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY ?? ""

if (!publishableKey) {
  throw new Error("Please add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your environment variables.")
}

SplashScreen.preventAutoHideAsync()

function RootLayoutContent() {
  const { isLoaded: authLoaded } = useAuth()
  const [fontsLoaded] = useFonts({
    "sans-bold": sansBold,
    "sans-extrabold": sansExtraBold,
    "sans-light": sansLight,
    "sans-medium": sansMedium,
    "sans-regular": sansRegular,
    "sans-semibold": sansSemiBold,
  })

  useEffect(() => {
    if (fontsLoaded && authLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, authLoaded])

  if (!fontsLoaded || !authLoaded) {
    return null
  }

  return null
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <Stack screenOptions={{ headerShown: false }} />
      <RootLayoutContent />
    </ClerkProvider>
  )
}
