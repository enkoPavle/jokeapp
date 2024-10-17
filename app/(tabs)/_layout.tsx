import React from "react"
import {Tabs} from "expo-router"

import {TabBarIcon} from "@/shared/components/tab-bar-icon"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({color, focused}) => <TabBarIcon name={"today"} color={color} />
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({color, focused}) => <TabBarIcon name={"history"} color={color} />
        }}
      />
    </Tabs>
  )
}
