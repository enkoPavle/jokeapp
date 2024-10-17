import React from "react"
import {Tabs} from "expo-router"

import {Header, Text} from "@/shared/components"
import {TabBarIcon} from "@/shared/components/tab-bar-icon"

import {colors} from "@/constants/colors"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerShown: true,
        header: ({options: {title}}) => <Header title={title} />,
        tabBarStyle: {
          alignItems: "center"
        },
        tabBarItemStyle: {
          flex: 0,
          paddingHorizontal: 32
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Today",
          tabBarLabel: ({focused}) => (
            <Text size="xs" color={colors[focused ? "purple" : "gray"]}>
              Today
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <TabBarIcon name={"today"} color={colors[focused ? "purple" : "gray"]} />
          )
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarLabel: ({focused}) => (
            <Text size="xs" color={colors[focused ? "purple" : "gray"]}>
              History
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <TabBarIcon name={"history"} color={colors[focused ? "purple" : "gray"]} />
          )
        }}
      />
    </Tabs>
  )
}
