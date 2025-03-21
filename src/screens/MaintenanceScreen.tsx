import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CardTitle, Container } from '../styles/StyledComponents';
import AppHeader from '../components/AppHeader';

const MaintenanceScreen = ({navigation}) => {
  return (
    <Container>
      <AppHeader title="Home" navigation={navigation} />
      <CardTitle>Maintenance Screen</CardTitle>
    </Container>
  );
};

export default MaintenanceScreen;

const styles = StyleSheet.create({});
