import { View, Text, KeyboardAvoidingView, Platform, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constants/images';
import Ionicons from '@expo/vector-icons/Ionicons';
const { width } = Dimensions.get('window')

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => { }

  return (
    <KeyboardAvoidingView
      className='flex-1'
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Card View */}
      {/* <View
        className='flex-1 justify-center items-center px-5'
      > */}
      {/* <View
          className='items-center w-[100%]'
        >
          <Image
            source={require('./../../assets/images/logo.png')}
            className='w-[75vw] h-[75vw]'
            resizeMode={'cover'}
          />
        </View> */}

      <View
        className='bg-white rounded-2xl p-6 shadow-xl border border-gray-400'
      >
        <View
          className=''
        >
          {/* Email Input */}
          <View
            className=''
          >
            <Text
              className='text-xl font-medium text-gray-800'
            >
              Email
            </Text>
            <View
              className='flex-row items-center bg-gray-50 border border-gray-300 rounded-xl px-3 py-2'
            >
              <Ionicons
                name='mail-outline'
                size={20}
                color={'#000'}
                className='mr-2'
              />
              <TextInput
                className='flex-1 text-gray-800'
                placeholder='Enter you email'
                placeholderClassName='text-gray-400'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
              />
            </View>

            {/* Password Input */}
            <View
              className='mt-5'
            >
              <Text
                className='text-xl font-medium text-gray-800'
              >
                Password
              </Text>
              <View
                className='flex-row items-center bg-gray-50 border border-gray-300 rounded-xl px-3 py-2'
              >
                <Ionicons
                  name='lock-closed-outline'
                  size={20}
                  color={'#000'}
                  className='mr-2'
                />
                <TextInput
                  className='flex-1 text-gray-800'
                  placeholder='Enter you email'
                  placeholderClassName='text-gray-400'
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  keyboardType='email-address'
                  autoCapitalize='none'
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} className="p-1">
                  <Ionicons
                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                    size={20}
                    color="#2563eb"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* </View> */}
    </KeyboardAvoidingView>
  )
}