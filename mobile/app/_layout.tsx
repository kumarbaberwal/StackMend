import { store } from '@/store/store';
import { Provider } from 'react-redux';
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