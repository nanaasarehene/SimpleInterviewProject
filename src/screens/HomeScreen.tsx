import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CardTitle, Container } from '../styles/StyledComponents';
import AppHeader from '../components/AppHeader';

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <AppHeader title="Home" navigation={navigation} />
      <CardTitle>Home Screen</CardTitle>
    </Container>
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
