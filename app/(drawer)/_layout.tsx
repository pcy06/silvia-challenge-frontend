import { Drawer } from 'expo-router/drawer';
import { Home, Lightbulb } from '@tamagui/lucide-icons';
import { useTheme } from '@/hooks/useTheme';
import { ScreenSize, useScreenSize } from '@/hooks/useScreenSize';
import CustomDrawer from '@/components/common/CustomDrawer';

export default function MainLayout() {
  const screenSize = useScreenSize();
  const isPermanentDrawer = screenSize !== ScreenSize.MOBILE;
  const theme = useTheme();

  return (
    <Drawer
      initialRouteName="contents/index"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveTintColor: theme.text,
        drawerInactiveTintColor: theme.text,
        headerTintColor: theme.text,
        drawerLabelStyle: {
          fontSize: 16,
        },
        drawerType: isPermanentDrawer ? 'permanent' : 'front',
        headerShown: isPermanentDrawer ? false : true,
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "홈",
          drawerLabel: "홈",
          drawerIcon: () => <Home color="$color" />,
        }}
      />
      <Drawer.Screen
        name="contents/index"
        options={{
          title: "콘텐츠 관리",
          drawerLabel: "콘텐츠 관리",
          drawerIcon: () => <Lightbulb color="$color" />,
        }}
      />
    </Drawer>
  );
} 