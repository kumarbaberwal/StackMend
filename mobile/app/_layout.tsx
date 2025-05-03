import { store } from '@/store/store';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import '../global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1 pt-10">
          <Stack
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen
              name='(protected)'
              options={{
                animation: 'none',
              }}
            />
            <Stack.Screen
              name='(auth)'
              options={{
                animation: 'none',
              }}
            />
          </Stack>
          <StatusBar style={'auto'} />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
