import { useLocalSearchParams } from "expo-router"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
export default function SubscriptionDetails() {
  const { id } = useLocalSearchParams<{ id: string }>()
  return (
    <SafeAreaView>
      <Text>Subscriptions Details: {id} </Text>
    </SafeAreaView>
  )
}
