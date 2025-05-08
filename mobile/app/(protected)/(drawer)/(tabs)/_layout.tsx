import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 5,
          paddingBottom: insets.bottom,
          height: 60 + insets.bottom,
        }
      }}
    >
      <Tabs.Screen name='index' options={{
        title: "Home",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
        )
      }}
      />
      <Tabs.Screen name='search' options={{
        title: "Search",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? "search" : "search-outline"} size={size} color={color} />
        )
      }}
      />
      <Tabs.Screen name='submiterror' options={{
        title: "Submit Error",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? "add-circle" : "add-circle-outline"} size={size} color={color} />
        )
      }}
      />
      <Tabs.Screen name='dashboard' options={{
        title: "Dashboard",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color} />
        ),
        tabBarBadge: 1
      }}
      />
    </Tabs>
  )
}