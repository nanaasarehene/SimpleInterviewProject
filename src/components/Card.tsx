// src/components/Card.js
import React, { ReactNode } from 'react';
import { CardContainer, CardTitle, CardValue, CardButton, CardButtonIcon, CardButtonText } from '../styles/StyledComponents';
import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';

interface CardProps {
  title: string;
  value?: string;
  buttonText?: string;
  buttonIcon?: ImageSourcePropType;
  onButtonPress?: () => void;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Card: React.FC<CardProps> = ({ title, value, buttonText, buttonIcon, onButtonPress, children, style }) => {
  
  return (
    <CardContainer style={style}>
      <CardTitle>{title}</CardTitle>
      {value && <CardValue>{value}</CardValue>}
      {children}
      {buttonText && buttonIcon && (
        <CardButton onPress={onButtonPress}>
          <CardButtonIcon source={buttonIcon} />
          <CardButtonText>{buttonText}</CardButtonText>
        </CardButton>
      )}
    </CardContainer>
  );
};

export default Card;
