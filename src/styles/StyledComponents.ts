// src/styles/StyledComponents.js
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { AppTheme } from './theme';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  
`;

export const AppHeaderContainer = styled.View`
  width: 100%;
  height: 70px;
  background-color: ${AppTheme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-horizontal: 15px;
`;

export const AppHeaderText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${AppTheme.colors.white};
  text-align: center;
  flex: 1;
  margin-top: 10px;

`;

export const BackIcon = styled.Image`
  width: 24px;
  height: 24px;
  color: ${AppTheme.colors.black};
  margin-top: 10px;

`;

export const CardContainer = styled.View`
  background-color: ${AppTheme.colors.white};
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  shadow-color: ${AppTheme.colors.black};
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  elevation: 3;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${AppTheme.colors.black};
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;`;

export const CardValue = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color:${AppTheme.colors.black};
  margin-bottom: 5px;
`;

export const CardButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const CardButtonIcon = styled.Image`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;

export const CardButtonText = styled.Text`
  font-size: 16px;
  color: ${AppTheme.colors.darkGray};
`;

export const ProgressBarContainer = styled.View`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-vertical: 5px;
`;

export const ProgressBarFill = styled.View`
  width: ${props => props.progress}%;
  height: 100%;
  background-color:${AppTheme.colors.primary};
`;

export const ProgressText = styled.Text`
  font-size: 14px;
  color: ${AppTheme.colors.darkGray};
`;

export const TipText = styled.Text`
  font-size: 14px;
  color: ${AppTheme.colors.darkGray};
  margin-bottom: 3px;
`;

export const DateText = styled.Text`
  font-size: 14px;
  color: ${AppTheme.colors.black};
  font-weight: bold;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;