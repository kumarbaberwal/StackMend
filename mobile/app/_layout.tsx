import { store } from '@/store/store';
import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import '../global.css';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView
          className='flex-1'
        >
          <Stack
            screenOptions={{
              headerShown: false,
              animation: 'fade',
            }}
          >
            <Stack.Screen name='(protected)' />
            <Stack.Screen name='(auth)' />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
      {/* <StatusBar style='auto' hidden /> */}
    </Provider>
  );
}