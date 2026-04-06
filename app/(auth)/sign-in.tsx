import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function SignIn() {
  return (
    <View>
      <Text>sign-in</Text>
      <Link href="/sign-up" className="mt-4 rounded-2xl bg-primary p-6 text-white text-lg">
        Create account
      </Link>
    </View>
  );
}
