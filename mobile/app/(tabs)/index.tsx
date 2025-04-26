import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

export default function Menu() {
  return (
    <View>
      <Text className='text-text'>Menu</Text>
      <Redirect href={'/login'} />
    </View>
  )
}