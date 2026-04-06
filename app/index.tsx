import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-background">
      <Text className="text-success text-4xl font-bold text-center">
        Edit app/index.tsx to edit this screen.
      </Text>
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
        href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }}
        className="mt-4 rounded-2xl bg-primary p-6 text-white text-lg"
      >
        Claude Max Subscription
      </Link>
    </View>
  );
}
