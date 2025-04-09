import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function ErrorDetails() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Error: {id}</Text>
    </View>
  )
}