// src/screens/CarScreen.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppAssets from '../assets/registry';
import AppHeader from '../components/AppHeader';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import { CardContainer, CardTitle, Container, DateText, TipText } from '../styles/StyledComponents';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '../types/navigation.types';
import { ROUTES } from '../types/route';

interface CarScreenProps {
  navigation: BottomTabNavigationProp<MainTabParamList, typeof ROUTES.MAIN.TAB.CAR>;
}

const CarScreen: React.FC<CarScreenProps> = ({ navigation }) => {  return (
    <Container>
      <AppHeader title="Hi Isaac" navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.cardRow}>
          <Card
            title="New Car Savings"
            value="€13,750"
            buttonText="Add"
            buttonIcon={AppAssets.Icons.Add}
            onButtonPress={() => { }}
            style={styles.card}
          >
            <ProgressBar
              progress={(13.75 / 20) * 100}
              progressBarStyle={{ marginVertical: 5 }}
            />
          </Card>
          <Card
            title="Maintenance"
            value="€3,750"
            buttonText="Schedule"
            buttonIcon={AppAssets.Icons.Add} 
            onButtonPress={() => { }}
            style={styles.card}
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

      </View>
    </Container>
  );
};

export default CarScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,

  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginTop: 15,
  },
  card: {
    flex: 1,
    marginHorizontal: 5,
  },
});
