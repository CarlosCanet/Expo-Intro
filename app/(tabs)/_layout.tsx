import { clsx } from "clsx"
import { Redirect, Tabs } from "expo-router"
import { Image, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { tabs } from "@/constants/data"
import { colors, components } from "@/constants/theme"
import { useAuth } from "@clerk/expo"

const { tabBar } = components

const TabLayout = () => {
  const { isSignedIn, isLoaded } = useAuth()
  const insets = useSafeAreaInsets()

  if (!isLoaded) {
    return null
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />
  }

  const TabIcon = ({ focused, icon }: TabIconProps) => (
    <View className="size-12">
      <View className={clsx("tabs-pill", focused && "tabs-active")}>
        <Image source={icon} resizeMode="contain" className="tabs-glyph" />
      </View>
    </View>
  )
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {
          alignItems: "center",
          height: tabBar.iconFrame,
          justifyContent: "center",
          width: tabBar.iconFrame,
        },
        tabBarItemStyle: {
          paddingVertical: (tabBar.height - tabBar.iconFrame) / 3,
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderRadius: tabBar.radius,
          borderTopWidth: 0,
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          elevation: 0,
          height: tabBar.height,
          marginHorizontal: tabBar.horizontalInset,
          position: "absolute",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={tab.icon} />,
            title: tab.title,
          }}
        />
      ))}
    </Tabs>
  )
}

export default TabLayout
