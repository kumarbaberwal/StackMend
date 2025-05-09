import CustomDrawerContent from '@/components/CustomDrawerContent';
import { Drawer } from 'expo-router/drawer';
import { Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          // drawerLabel: "StackMend",
          headerTitle: "StackMend",
          headerTitleAlign: 'center',
          // headerShown: false,
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name='(tabs)' options={{
          drawerLabel: "Home",
          drawerLabelStyle: {
            textAlign: 'center',
            fontSize: 20,
          }
        }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
