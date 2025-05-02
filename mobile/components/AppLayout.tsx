// app/AppLayout.tsx
import { hydrateAuthFromStorage } from '@/features/auth/authSlice';
import { useAppDispatch } from '@/store/store';
import { Redirect, SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

// SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const dispatch = useAppDispatch();
  const segments = useSegments();
  const router = useRouter();
  const { user, token, loading } = useSelector((state: RootState) => state.auth);
  console.log("user", user, "token", token, "loading", loading);
  const [hasNavigated, setHasNavigated] = useState(false);
  console.log(segments);

  // useEffect(() => {
  //   const removeAuth = async () => {
  //     await AsyncStorage.removeItem('token');
  //     await AsyncStorage.removeItem('user');
  //   }
  //   removeAuth();
  // }, [])

  useEffect(() => {
    dispatch(hydrateAuthFromStorage());
  }, [dispatch]);

  // useEffect(() => {
  //   if (!loading) SplashScreen.hideAsync();
  // }, [loading]);

  // useEffect(() => {
  //   // if (hasNavigated) return;
  //   const isAuthScreen = segments[0] === "(auth)";
  //   const isSignedIn = !!user && !!token;
  //   if (isAuthScreen && !isSignedIn) {
  //     // router.replace('/login');
  //     console.log("Not Authenticated: ", isAuthScreen, isSignedIn);
  //     <Redirect href={'/(auth)/login'} />
  //   } else if (isAuthScreen && isSignedIn) {
  //     console.log("Authenticated: ", isAuthScreen, isSignedIn);
  //     <Redirect href={'/(tabs)'} />
  //     // router.replace('/(tabs)');
  //   }
  //   // setHasNavigated(true);
  // }, [user, token, segments]);

  // const isSignedIn = !!user && !!token;
  // const isAuthGroup = segments[0] === '(auth)';

  // // Show nothing while loading the auth state
  // if (loading) {
  //   return null;
  // }

  // // Redirect logic must be returned
  // if (!isSignedIn && !isAuthGroup) {
  //   console.log('🔒 Not Authenticated, redirecting to login');
  //   // return <Redirect href="/(auth)/login" />;
  //   router.replace('/(auth)/login');
  //   return;
  // }

  // if (isSignedIn && isAuthGroup) {
  //   console.log('✅ Authenticated, redirecting to tabs');
  //   router.replace('/(tabs)');
  //   return;
  // }

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <Stack screenOptions={{ headerShown: true }}>
          <Stack.Screen name="index" />
          {/* <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="errors/[id]" /> */}
        </Stack>
      </SafeAreaView>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
