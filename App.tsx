/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppEntry from './src/entry/AppEntry';
import { SafeAreaView } from 'react-native';


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppEntry />
    </SafeAreaView>
  );
}



export default App;
