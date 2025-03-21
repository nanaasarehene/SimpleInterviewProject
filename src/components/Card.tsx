// src/components/Card.js
import React from 'react';
import { CardContainer, CardTitle, CardValue, CardButton, CardButtonIcon, CardButtonText } from '../styles/StyledComponents';

const Card = ({ title, value, buttonText, buttonIcon, onButtonPress, row }) => {
  return (
    <CardContainer row={row}>
      <CardTitle>{title}</CardTitle>
      {value && <CardValue>{value}</CardValue>}
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
