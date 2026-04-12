import { Text } from "react-native"
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context"
import { withUniwind } from "uniwind"

const SafeAreaView = withUniwind(RNSafeAreaView)
export default function insights() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>insights</Text>
    </SafeAreaView>
  )
}
