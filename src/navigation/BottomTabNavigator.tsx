// src/navigation/BottomTabNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import AppAssets from '../assets/registry';
import CarScreen from '../screens/CarScreen';
import HomeScreen from '../screens/HomeScreen';
import MaintenanceScreen from '../screens/MaintenanceScreen';
import OilScreen from '../screens/OilScreen';
import ProfileScreen from '../screens/ProfileScreen';
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
          backgroundColor: '#fff',
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
            <Image
              source={AppAssets.Icons.Home}
              style={{ width: 24, height: 24, tintColor: focused ? '#ff4d4d' : '#8E8E93' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.MAIN.TAB.MAINTENANCE}
        component={MaintenanceScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={AppAssets.Icons.Tool}
              style={{ width: 24, height: 24, tintColor: focused ? '#ff4d4d' : '#8E8E93' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.MAIN.TAB.CAR}
        component={CarScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={AppAssets.Icons.Car}
              style={{ width: 24, height: 24, tintColor: focused ? '#ff4d4d' : '#8E8E93' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.MAIN.TAB.OIL}
        component={OilScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={AppAssets.Icons.Oil}
              style={{ width: 24, height: 24, tintColor: focused ? '#ff4d4d' : '#8E8E93' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.MAIN.TAB.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={AppAssets.Icons.User}
              style={{ width: 24, height: 24, tintColor: focused ? '#ff4d4d' : '#8E8E93' }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;