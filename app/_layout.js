import { Stack } from 'expo-router';
import 'react-native-gesture-handler';

import { GestureHandlerRootView }
  from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          animation: 'none',
          headerShown: false,
        }} />
    </GestureHandlerRootView>
  );
}