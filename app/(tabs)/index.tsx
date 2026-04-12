import { Link } from "expo-router"
import { Text } from "react-native"
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context"
import { withUniwind } from "uniwind"

const SafeAreaView = withUniwind(RNSafeAreaView)

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-success text-5xl font-sans-extrabold">Home</Text>
      <Link
        href="/onboarding"
        className="mt-4 font-sans-bold rounded-2xl bg-primary p-6 text-white text-lg"
      >
        Go to onboarding
      </Link>
      <Link
        href="/sign-in"
        className="mt-4 font-sans-bold rounded-2xl bg-primary p-6 text-white text-lg"
      >
        Go to sign-in
      </Link>
      <Link
        href="/sign-up"
        className="mt-4 font-sans-bold rounded-2xl bg-primary p-6 text-white text-lg"
      >
        Go to sign-up
      </Link>
    </SafeAreaView>
  )
}
