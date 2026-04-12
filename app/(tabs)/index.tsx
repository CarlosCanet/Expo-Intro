import { Link } from "expo-router"
import { Text } from "react-native"
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context"
import { withUniwind } from "uniwind"

const SafeAreaView = withUniwind(RNSafeAreaView)

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-success text-xl font-bold text-center">Welcome to Uniwind!</Text>
      <Link href="/onboarding" className="mt-4 rounded-2xl bg-primary p-6 text-white text-lg">
        Go to onboarding
      </Link>
      <Link href="/sign-in" className="mt-4 rounded-2xl bg-primary p-6 text-white text-lg">
        Go to sign-in
      </Link>
      <Link href="/sign-up" className="mt-4 rounded-2xl bg-primary p-6 text-white text-lg">
        Go to sign-up
      </Link>
      <Link href="/subscriptions" className="mt-4 rounded-2xl bg-primary p-6 text-white text-lg">
        Spotify Subscription
      </Link>
      <Link
        href={{ params: { id: "claude" }, pathname: "/subscriptions/[id]" }}
        className="mt-4 rounded-2xl bg-primary p-6 text-white text-lg"
      >
        Claude Max Subscription
      </Link>
    </SafeAreaView>
  )
}
