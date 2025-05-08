import Loader from '@/components/Loader';
import { hydrateAuthFromStorage } from '@/features/auth/authSlice';
import { RootState, useAppDispatch } from '@/store/store';
import { Redirect, SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

SplashScreen.preventAutoHideAsync();

export default function ProtectedLayout() {
  const dispatch = useAppDispatch();
  const { user, token, loading, isHydrated } = useSelector(
    (state: RootState) => state.auth
  );
  console.log("user:", user);
  console.log("token:", token);
  console.log("isHydrated:", isHydrated);
  console.log("loading:", loading);

  useEffect(() => {
    console.log("Getting user details")
    if (!isHydrated) {
      dispatch(hydrateAuthFromStorage());
    }
  }, [dispatch, isHydrated]);


  useEffect(() => {
    console.log('Hiding the splash screen')
    if (isHydrated) {
      SplashScreen.hideAsync();
    }
  }, [isHydrated])

  // Show loading spinner while checking auth
  if (!isHydrated || loading) {
    console.log('Loading')
    return (
      <Loader />
    );
  }

  if (!user && !token) {
    console.log('redirecting')
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="(drawer)"
      />
      <Stack.Screen
        name='error/[id]'
      />
    </Stack>
  );
}
