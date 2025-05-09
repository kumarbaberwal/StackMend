import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/148860110?v=4' }} // replace with actual image
          style={styles.avatar}
        />
        <Text style={styles.name}>Nitesh Kumar</Text>
        <Text style={styles.username}>@aapkaakumar</Text>
        <Text style={styles.followInfo}>
          <Text style={styles.bold}>198</Text> Following{' '}
          <Text style={styles.bold}>215</Text> Followers
        </Text>
      </View>

      <ScrollView>
        <DrawerItem icon="user" label="Profile" />
        <DrawerItem icon="x" label="Premium" />
        <DrawerItem icon="bookmark" label="Bookmarks" />
        <DrawerItem icon="briefcase" label="Jobs" />
        <DrawerItem icon="list" label="Lists" />
        <DrawerItem icon="mic" label="Spaces" />
        <DrawerItem icon="dollar-sign" label="Monetization" />

        <View style={styles.divider} />

        <DrawerItem icon="chevron-down" label="Professional Tools" />
        <DrawerItem icon="chevron-down" label="Settings & Support" />
      </ScrollView>

      <View style={styles.bottomIcon}>
        <Feather name="sun" size={20} />
      </View>
    </DrawerContentScrollView>
  );
}

function handleOnPress(label: string) {
  console.log("Button Pressed", label);
}

function DrawerItem({ icon, label }: any) {
  return (
    <TouchableOpacity style={styles.drawerItem} onPress={() => handleOnPress(label)}>
      <Feather name={icon} size={20} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 16,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  username: {
    color: 'gray',
  },
  followInfo: {
    marginTop: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    paddingLeft: 16,
  },
  icon: {
    marginRight: 20,
  },
  label: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
  },
  bottomIcon: {
    padding: 16,
  },
});
