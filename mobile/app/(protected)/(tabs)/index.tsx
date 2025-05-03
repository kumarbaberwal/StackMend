import { View, Text, Button } from 'react-native'
import React from 'react'
import { RootState, useAppDispatch } from '@/store/store'
import { useSelector } from 'react-redux';
import { logoutUser } from '@/features/auth/authSlice';

export default function Index() {
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>Index</Text>
      <Button title='Logout' onPress={() => dispatch(logoutUser())} />
    </View>
  )
}