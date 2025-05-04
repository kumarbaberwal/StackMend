import { store } from '@/store/store';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import '../global.css';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1">
          <Stack
            screenOptions={{
              headerShown: false,
              animation: 'fade'
            }}
          >
            <Stack.Screen
              name='(protected)'
              options={{
                animation: 'fade',
              }}
            />
            <Stack.Screen
              name='(auth)'
              options={{
                animation: 'fade',
              }}
            />
          </Stack>
          <StatusBar style={'auto'} />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
