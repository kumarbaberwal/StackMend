import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '@/constants/colors';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: colors.background,
          borderRadius: 25,
          position: "absolute",
          bottom: 20,
          height: 60,
          marginHorizontal: 10,
          shadowColor: colors.black,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 4,
        },
        tabBarIconStyle: {
          flex: 1,
          height: "100%",
          alignItems: 'center',
          justifyContent: 'center',
        }
      })}

    >
      <Tabs.Screen name='index' options={{
        title: "Home",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
        )
      }}
      />
      < Tabs.Screen name='search' options={{
        title: "Search",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? "search" : "search-outline"} size={size} color={color} />
        )
      }}
      />
      < Tabs.Screen name='submiterror' options={{
        title: "Submit Error",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? "add-circle" : "add-circle-outline"} size={size} color={color} />
        )
      }}
      />
      < Tabs.Screen name='dashboard' options={{
        title: "Dashboard",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color} />
        ),
        tabBarBadge: 2
      }}
      />
    </Tabs >
  )
}