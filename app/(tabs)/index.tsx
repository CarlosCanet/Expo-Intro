import ListHeading from "@/components/list-heading"
import SubscriptionCard from "@/components/subscription-card"
import UpcomingSubscriptionCard from "@/components/upcoming-subscription-card"
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data"
import { icons } from "@/constants/icons"
import images from "@/constants/images"
import { formatCurrency } from "@/lib/utils"
import dayjs from "dayjs"
import { useState } from "react"
import { FlatList, Image, Text, View } from "react-native"
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context"
import { withUniwind } from "uniwind"

const SafeAreaView = withUniwind(RNSafeAreaView)

export default function Index() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>(null)

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View className="home-header">
              <View className="home-user">
                <Image source={images.avatar} className="home-avatar" />
                <Text className="home-user-name">{HOME_USER.name}</Text>
              </View>
              <Image source={icons.add} className="home-add-icon" />
            </View>

            <View className="home-balance-card">
              <Text className="home-balance-label">Balance</Text>
              <View className="home-balance-row">
                <Text className="home-balance-amount">{formatCurrency(HOME_BALANCE.amount)}</Text>
                <Text className="home-balance-date">
                  {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
                </Text>
              </View>
            </View>

            <View>
              <ListHeading title="Upcoming" />
              <FlatList
                data={UPCOMING_SUBSCRIPTIONS}
                renderItem={({ item }) => <UpcomingSubscriptionCard {...item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="py-2"
                ListEmptyComponent={<Text className="home-empty-state">No upcoming renewals</Text>}
              />
              {/* <UpcomingSubscriptionCard data={UPCOMING_SUBSCRIPTIONS[0]} /> */}
            </View>
            <ListHeading title="All Subscriptions" />
          </>
        )}
        data={HOME_SUBSCRIPTIONS}
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={expandedSubscriptionId === item.id}
            onPress={() =>
              setExpandedSubscriptionId((currentId) => (currentId === item.id ? null : item.id))
            }
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerClassName="gap-2 pb-20"
        ListEmptyComponent={<Text className="home-empty-state">No subscriptions yet</Text>}
        extraData={expandedSubscriptionId}
      />
    </SafeAreaView>
  )
}
