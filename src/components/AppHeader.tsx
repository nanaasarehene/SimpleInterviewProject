// src/components/AppHeader.js
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AppHeaderContainer, AppHeaderText, BackIcon } from '../styles/StyledComponents';
import AppAssets from '../assets/registry';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation.types';


interface AppHeaderProps {
  title: string;
  navigation: NativeStackNavigationProp<RootStackParamList>;
}


const AppHeader: React.FC<AppHeaderProps> = ({ title, navigation }) => {

  return (
    <AppHeaderContainer>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon source={AppAssets.Icons.BackArrow} />
      </TouchableOpacity>
      <AppHeaderText>{title}</AppHeaderText>
    </AppHeaderContainer>
  );
};

export default AppHeader;