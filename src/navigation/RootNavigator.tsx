import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../types/navigation.types';
import { ROUTES } from '../types/route';
import BottomTabNavigator from './BottomTabNavigator';


const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (

      <RootStack.Navigator
        initialRouteName={ROUTES.MAIN.STACK.TABNAVIGATOR}
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <RootStack.Screen
          name={ROUTES.MAIN.STACK.TABNAVIGATOR}
          component={BottomTabNavigator}
        />

      </RootStack.Navigator>

  );
};

export default RootNavigator;

