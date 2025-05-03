import Loader from '@/components/Loader';
import { hydrateAuthFromStorage } from '@/features/auth/authSlice';
import { RootState, useAppDispatch } from '@/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect, SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

SplashScreen.preventAutoHideAsync();

export default function ProtectedLayout() {
  const dispatch = useAppDispatch();
  const { user, token, loading, isHydrated } = useSelector(
    (state: RootState) => state.auth
  );
  // console.log("User: ", user, "Token: ", token, "Loading: ", loading, "isHydrated: ", isHydrated);

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

  if (!user && !token) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="(tabs)"
      />
      <Stack.Screen
        name="errors/[id]"
      />
    </Stack>
  );
}
