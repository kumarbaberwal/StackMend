import { Stack } from "expo-router";
import '@/app/global.css';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
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
