// src/screens/CarScreen.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppAssets from '../assets/registry';
import AppHeader from '../components/AppHeader';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import { CardContainer, CardTitle, Container, DateText, TipText } from '../styles/StyledComponents';

const CarScreen = ({ navigation }) => {
  return (
    <Container>
      <AppHeader title="Hi Isaac" navigation={navigation} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Card
          title="New Car Savings"
          value="€13,750"
          buttonText="Add"
          buttonIcon={AppAssets.Icons.Add}
          onButtonPress={() => {}}
          row
          style={{ flex: 1, marginRight: 7.5 }}
        >
          {/* Add progress bar inside the card */}
          <ProgressBar
            progress={(13.75 / 20) * 100} // Approximate progress for €13,750 (assuming €20,000 goal)
            progressBarStyle={{ marginVertical: 5 }}
          />
        </Card>
        <Card
          title="Maintenance"
          value="€3,750"
          buttonText="Schedule"
          buttonIcon={AppAssets.Icons.Schedule} // Use a square-plus icon
          onButtonPress={() => {}}
          row
          style={{ flex: 1, marginLeft: 7.5 }}
        />
      </View>
      <CardContainer>
        <CardTitle>Daily Savings Streak</CardTitle>
        <ProgressBar
          progress={(21 / 30) * 100}
          label="Savings Streak: 21/30 Days"
          subLabel="7 more days to unlock Free Servicing"
        />
      </CardContainer>
      <CardContainer>
        <CardTitle>Vehicle Maintenance Tips</CardTitle>
        <TipText>- Gearbox maintenance</TipText>
        <TipText>- Tire rotation</TipText>
        <TipText>- Frequent Oil change</TipText>
        <DateText>Next Servicing: 22-01-2025</DateText>
      </CardContainer>
    </Container>
  );
};

export default CarScreen;

const styles = StyleSheet.create({});