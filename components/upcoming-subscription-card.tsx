import { formatCurrency } from "@/lib/utils"
import { View, Text, Image } from "react-native"

type UpcomingSubscriptionCardProps = Omit<UpcomingSubscription, "id">

export default function UpcomingSubscriptionCard({
  daysLeft,
  icon,
  name,
  price,
  currency,
}: UpcomingSubscriptionCardProps) {
  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <Image source={icon} className="upcoming-icon" />
        <View className="upcoming-info">
          <Text className="upcoming-price">{formatCurrency(price, currency)}</Text>
          <Text className="upcoming-meta" numberOfLines={1}>
            {daysLeft ? `${daysLeft} days left` : "No days left"}
          </Text>
        </View>
      </View>

      <Text className="upcoming-name" numberOfLines={1}>
        {name}
      </Text>
    </View>
  )
}
