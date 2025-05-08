import { logoutUser } from '@/features/auth/authSlice';
import { useAppDispatch } from '@/store/store';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Index() {
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>Index</Text>
      <Button title='Logout' onPress={() => dispatch(logoutUser())} />
    </View>
  )
}