// src/components/AppHeader.js
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AppHeaderContainer, AppHeaderText, BackIcon } from '../styles/StyledComponents';
import AppAssets from '../assets/registry';

const AppHeader = ({ title, navigation }) => {
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