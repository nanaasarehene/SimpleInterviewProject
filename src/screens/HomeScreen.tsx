import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 , alignItems: 'center'}}>
        <Text>Welcome to the Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,   
  }
});
