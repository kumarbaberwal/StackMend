import { loginUser } from '@/features/auth/authSlice';
import { RootState, useAppDispatch } from '@/store/store';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const { error, loading } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const handleLogin = useCallback(async () => {
    Keyboard.dismiss();

    if (!email || !password) {
      ToastAndroid.show("Email and password are required", ToastAndroid.SHORT);
      return;
    }

    try {
      const { user, token } = await dispatch(loginUser({ email, password })).unwrap();
      // console.log(user, token);
      if (user && token) {
        router.replace('/');
        ToastAndroid.show('Login successful', ToastAndroid.LONG);
      }
    } catch (error) {
      ToastAndroid.show(error instanceof Error ? error.message : String(error), ToastAndroid.LONG);
    }
  }, [dispatch, email, password, router]);

  return (
    <KeyboardAvoidingView
      className='flex-1'
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps={'handled'}
      >

        {/* Container View */}
        <View
          className='flex-grow bg-white justify-center p-5'
        >

          {/* Card View */}

          <View
            className='bg-gray-100 rounded-2xl p-6 shadow-xl border-2 border-gray-400'
          >


            {/* Form Container */}
            <View
              className='mb-4'
            >

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
                    className='flex-1 h-14 text-gray-800 outline-none'
                    placeholder='Enter your email'
                    placeholderClassName='text-gray-400'
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    textContentType={'emailAddress'}
                    autoCorrect={false}
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
                    className='flex-1 h-14 text-gray-800 outline-none'
                    placeholder='Enter your password'
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


              {/* Login Button */}

              <TouchableOpacity
                className='bg-blue-400 rounded-xl h-14 justify-center items-center mt-4 shadow-xl'
                onPress={handleLogin}
                disabled={loading}
              >
                {
                  loading ? (
                    <ActivityIndicator color={'white'} />
                  ) : (
                    <Text
                      className='text-white text-base font-semibold'
                    >
                      Login
                    </Text>
                  )
                }
              </TouchableOpacity>


              {/* Footer */}

              <View className='flex-row justify-center mt-6'>
                <Text className='mr-1 text-gray-700'>
                  Don't have an account?
                </Text>
                <Link href={'/(auth)/signup'} asChild>
                  <TouchableOpacity>
                    <Text className='font-semibold text-gray-600' >
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </Link>
              </View>

            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView >
  )
}