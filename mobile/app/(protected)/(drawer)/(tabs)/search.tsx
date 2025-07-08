import { Feather } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
const trendingTopics = [
  { topic: "#ReactNative", errors: "125k" },
  { topic: "#TypeScript", errors: "89k" },
  { topic: "#WebDevelopment", errors: "234k" },
  { topic: "#ai", errors: "567k" },
  { topic: "#technews", errors: "98k" },
]

export default function Search() {
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      < View className='px-4 py-3 border-b border-gray-100' >
        <View className='flex-row items-center bg-gray-100 rounded-full px-4 py-3'>
          <Feather name='search' size={20} color={"#657786"} />
          <TextInput
            placeholder='Search Errors'
            className='flex-1 ml-3 text-base'
            placeholderTextColor={"#657786"}
            returnKeyType="search"
          />
        </View>
      </View >

      {/* Scrollview */}
      < ScrollView
        showsVerticalScrollIndicator={false}
        className='flex-1'
      >
        <View className='p-4'>
          <Text className="text-xl font-bold text-gray-900 mb-4">
            Trending for you
          </Text>
          {
            trendingTopics.map((item, index) => (
              <TouchableOpacity key={index} className="py-3 border-b border-gray-100">
                <Text className="text-gray-500 text-sm">Trending in Technology</Text>
                <Text className="font-bold text-gray-900 text-lg">{item.topic}</Text>
                <Text className="text-gray-500 text-sm">{item.errors} Errors</Text>
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView >
    </View>
  )
}