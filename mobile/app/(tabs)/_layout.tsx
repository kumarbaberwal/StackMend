import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}
    >
      <Tabs.Screen name='index' options={{
        title: "Home",
      }} />
      <Tabs.Screen name='addQuestion' options={{
        title: "Add Question",
      }} />
      <Tabs.Screen name='profile' options={{
        title: "Profile",
      }} />
    </Tabs>
  )
}