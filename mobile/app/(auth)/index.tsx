import { View, Text, KeyboardAvoidingView, Platform, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constants/images';
const { width } = Dimensions.get('window')

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => { }

  return (
    <KeyboardAvoidingView
      className='flex-1 justify-center items-center'
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View
        className='flex-1 justify-center items-center p-[20px]'
      >
        <View
          className='items-center w-[100%]'
        >
          <Image
            source={require('./../../assets/images/logo.png')}
            className='w-[75vw] h-[75vw]'
            resizeMode={'cover'}
          />
          <Text>
            Hi there
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}