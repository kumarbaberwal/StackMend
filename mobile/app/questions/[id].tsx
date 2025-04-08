import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function Question() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Question {id}</Text>
    </View>
  )
}