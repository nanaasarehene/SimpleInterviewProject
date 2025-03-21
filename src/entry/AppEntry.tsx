import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigator from '../navigation/RootNavigator';


const AppEntry = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
     </NavigationContainer>
  );

};

export default AppEntry;

