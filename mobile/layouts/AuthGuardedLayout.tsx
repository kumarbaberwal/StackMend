import { hydrateAuthFromStorage } from '@/features/auth/authSlice';
import { RootState, useAppDispatch } from '@/store/store';
import { SplashScreen, Stack } from 'expo-router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';

SplashScreen.preventAutoHideAsync();

export default function AuthGuardedLayout() {
  const dispatch = useAppDispatch();
  const { user, token, loading, isHydrated } = useSelector(
    (state: RootState) => state.auth
  );

  const isLoggedIn = !!user && !!token && isHydrated;

  useEffect(() => {
    if (!isHydrated) {
      dispatch(hydrateAuthFromStorage());
    }
  }, [dispatch, isHydrated]);

  useEffect(() => {
    if (isHydrated) {
      SplashScreen.hideAsync();
    }
  }, [isHydrated])

  // Show loading spinner while checking auth
  if (!isHydrated || loading) {
    return (
      <Loader />
    );
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name='(protected)' />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name='(auth)' />
      </Stack.Protected>
    </Stack>
  )
}