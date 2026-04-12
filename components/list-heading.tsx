import { Text, TouchableOpacity, View } from "react-native"

type Props = {
  title: string
}

export default function ListHeading({ title }: Props) {
  return (
    <View className="list-head">
      <Text className="list-title">{title}</Text>
      <TouchableOpacity className="list-action">
        <Text className="list-action-text">View All</Text>
      </TouchableOpacity>
    </View>
  )
}
