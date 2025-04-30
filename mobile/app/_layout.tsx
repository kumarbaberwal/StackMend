import '@/app/global.css';
import { useAuthStore } from "@/store/authStore";
import { SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter()
  const segments = useSegments()
  const { isCheckingAuth, checkAuth, user, token } = useAuthStore()

  console.log(segments)

  useEffect(() => {
    checkAuth()
  }, [])

  useEffect(() => {
    if (!isCheckingAuth) {
      SplashScreen.hideAsync();
    }
  }, [isCheckingAuth])

  useEffect(() => {
    // if (isCheckingAuth) return; // ✅ wait until auth check is done
    const isAuthScreen = segments[0] === '(auth)'
    const isSignedIn = !!user && !!token

    if (!isAuthScreen && !isSignedIn) {
      router.replace('/(auth)/index')
    } else if (isAuthScreen && isSignedIn) {
      router.replace('/(tabs)')
    }
  }, [segments, user, token])

  return (
    <SafeAreaProvider>
      <SafeAreaView
        className="flex-1"
      >
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="errors/[id]" />
        </Stack>
      </SafeAreaView>
      <StatusBar style={'auto'} />
    </SafeAreaProvider>
  );
}
