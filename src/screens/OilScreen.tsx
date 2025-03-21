import React from 'react';
import { StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import { CardTitle, Container } from '../styles/StyledComponents';

const OilScreen = ({navigation}) => {
  return (
    <Container>
      <AppHeader title="Oil Checking " navigation={navigation} />
      <CardTitle>Oil Screen</CardTitle>
    </Container>
  );
};

export default OilScreen;

const styles = StyleSheet.create({});
