import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';

export default function CustomDrawer(props: DrawerContentComponentProps) {
  return (
    <View style={[styles.container]}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <Image
            source={require('@/assets/images/silvia.png')}
            style={styles.logo}
            resizeMode='contain'
          />
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={styles.footer}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150
  },
  footer: {
    padding: 16,
  }
}); 