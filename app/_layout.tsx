import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import { config } from '@/tamagui.config';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/apollo';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <ApolloProvider client={client}>
      <TamaguiProvider config={config} defaultTheme={colorScheme!}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack initialRouteName="(drawer)">
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            <Stack.Screen name="contents/[contentId]/index" options={{ title: '콘텐츠 관리' }} />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </TamaguiProvider>
    </ApolloProvider>
  );
}
