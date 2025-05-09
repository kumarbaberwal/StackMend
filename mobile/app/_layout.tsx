import { store } from '@/store/store';
import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import '../global.css';
import AuthGuardedLayout from '@/layouts/AuthGuardedLayout';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AuthGuardedLayout />
      {/* <StatusBar style='auto' /> */}
    </Provider>
  );
}