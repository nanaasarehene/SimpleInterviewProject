// src/styles/StyledComponents.js
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 15px;
`;

export const AppHeaderContainer = styled.View`
  width: 100%;
  height: 60px;
  background-color: #ff4d4d;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-horizontal: 15px;
`;

export const AppHeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  flex: 1;
`;

export const BackIcon = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: #fff; /* Ensure back arrow is white */
`;

export const CardContainer = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  elevation: 3;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  justify-content: space-between;
`;

export const CardTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

export const CardValue = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ff4d4d;
  margin-bottom: 5px;
`;

export const CardButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const CardButtonIcon = styled.Image`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

export const CardButtonText = styled.Text`
  font-size: 14px;
  color: #333;
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
  background-color: #ff4d4d;
`;

export const ProgressText = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const TipText = styled.Text`
  font-size: 14px;
  color: #666;
  margin-bottom: 3px;
`;

export const DateText = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 5px;
`;