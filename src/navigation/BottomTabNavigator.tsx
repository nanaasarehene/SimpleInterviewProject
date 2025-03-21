// src/navigation/BottomTabNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppAssets from '../assets/registry';
import CarScreen from '../screens/CarScreen';
import HomeScreen from '../screens/HomeScreen';
import MaintenanceScreen from '../screens/MaintenanceScreen';
import OilScreen from '../screens/OilScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { AppTheme } from '../styles/theme';
import { MainTabParamList } from '../types/navigation.types';
import { ROUTES } from '../types/route';

const Tab = createBottomTabNavigator<MainTabParamList>();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.MAIN.TAB.CAR}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: AppTheme.colors.white,
          borderTopWidth: 0,
          elevation: 5,
          shadowOpacity: 0.1,
          shadowRadius: 5,
        },
        tabBarIconStyle: {
          marginVertical: 5,
        },
      }}
    >
      <Tab.Screen
        name={ROUTES.MAIN.TAB.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconWrapper, focused && styles.activeIconWrapper]}>
              <Image
                source={AppAssets.Icons.Home}
                style={[styles.icon, focused && styles.activeIcon]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.MAIN.TAB.MAINTENANCE}
        component={MaintenanceScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconWrapper, focused && styles.activeIconWrapper]}>
              <Image
                source={AppAssets.Icons.Tool}
                style={[styles.icon, focused && styles.activeIcon]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.MAIN.TAB.CAR}
        component={CarScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconWrapper, focused && styles.activeIconWrapper]}>
              <Image
                source={AppAssets.Icons.Car}
                style={[styles.icon, focused && styles.activeIcon]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.MAIN.TAB.OIL}
        component={OilScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconWrapper, focused && styles.activeIconWrapper]}>
              <Image
                source={AppAssets.Icons.Oil}
                style={[styles.icon, focused && styles.activeIcon]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.MAIN.TAB.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconWrapper, focused && styles.activeIconWrapper]}>
              <Image
                source={AppAssets.Icons.User}
                style={[styles.icon, focused && styles.activeIcon]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius:50,
  },
  activeIconWrapper: {
    backgroundColor: AppTheme.colors.primary,
  },
  icon: {
    width: 26,
    height: 16,
    tintColor: AppTheme.colors.gray,
  },
  activeIcon: {
    width: 48,
    height: 48,
    tintColor: AppTheme.colors.white,
  },
});
