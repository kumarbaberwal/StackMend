import { View, Text, KeyboardAvoidingView, Platform, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleSignUp = async () => {

  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className='flex-1'
    >

      {/* Container */}

      <View className='flex-grow bg-white justify-center p-5'>

        {/* Card */}

        <View className='bg-gray-100 rounded-2xl p-6 shadow-black shadow-xl border-2 border-gray-400'>


          {/* Header */}

          <View className='items-center mb-3'>

            <Text className='text-4xl font-bold mb-2 text-black'>
              StackMend ⚠️
            </Text>

            <Text className='text-base text-center text-gray-600'>
              Find your solution
            </Text>

          </View>

          {/* Form Container */}

          <View
            className='mb-4'
          >


            {/* UserName Input */}
            <View
              className='mb-5'
            >
              <Text
                className='text-base mb-2 font-medium text-gray-800'
              >
                Username
              </Text>
              <View
                className='flex-row items-center bg-gray-50 border border-gray-300 rounded-xl px-3'
              >
                <Ionicons
                  name='person-outline'
                  size={20}
                  color={'#000'}
                  className='mr-2'
                />
                <TextInput
                  className='flex-1 h-14 text-gray-800'
                  placeholder='kumar'
                  placeholderClassName='text-gray-400'
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize='none'
                />
              </View>
            </View>

            {/* Email Input */}
            <View
              className='mb-5'
            >
              <Text
                className='text-base mb-2 font-medium text-gray-800'
              >
                Email
              </Text>
              <View
                className='flex-row items-center bg-gray-50 border border-gray-300 rounded-xl px-3'
              >
                <Ionicons
                  name='mail-outline'
                  size={20}
                  color={'#000'}
                  className='mr-2'
                />
                <TextInput
                  className='flex-1 h-14 text-gray-800'
                  placeholder='kumar@gmail.com'
                  placeholderClassName='text-gray-400'
                  value={email}
                  onChangeText={setEmail}
                  keyboardType='email-address'
                  autoCapitalize='none'
                />
              </View>
            </View>

            {/* Password Input */}
            <View
              className='mb-5'
            >
              <Text
                className='text-base mb-2 font-medium text-gray-800'
              >
                Password
              </Text>
              <View
                className='flex-row items-center bg-gray-50 border border-gray-300 rounded-xl px-3'
              >
                <Ionicons
                  name='lock-closed-outline'
                  size={20}
                  color={'#000'}
                  className='mr-2'
                />
                <TextInput
                  className='flex-1 h-14 text-gray-800'
                  placeholder='******'
                  placeholderClassName='text-gray-400'
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize='none'
                />

                {/* Toggle Password Icon */}
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                    size={20}
                    color="#2563eb"
                  />
                </TouchableOpacity>
              </View>
            </View>


            {/* Signup Button */}

            <TouchableOpacity
              className='bg-blue-400 rounded-xl h-14 justify-center items-center mt-4 shadow-2xl shadow-blue-950'
              onPress={handleSignUp}
              disabled={isLoading}
            >
              {
                isLoading ? (
                  <ActivityIndicator color={'white'} />
                ) : (
                  <Text
                    className='text-white text-base font-semibold'
                  >
                    Sign Up
                  </Text>
                )
              }
            </TouchableOpacity>


            {/* Footer */}

            <View className='flex-row justify-center mt-6'>
              <Text className='mr-1 text-gray-700'>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => router.back()}>
                <Text className='font-semibold text-gray-600' >
                  Login
                </Text>
              </TouchableOpacity>
            </View>


          </View>

        </View>


      </View>
    </KeyboardAvoidingView>
  )
}