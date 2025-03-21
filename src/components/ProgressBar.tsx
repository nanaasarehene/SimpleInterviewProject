import React from 'react';
import { ProgressBarContainer, ProgressBarFill, ProgressText } from '../styles/StyledComponents';
import { StyleProp, ViewStyle } from 'react-native';

interface ProgressBarProps {
  progress: number;
  label?: string;
  subLabel?: string;
  progressBarStyle?: StyleProp<ViewStyle>;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label, subLabel, progressBarStyle }) => {  return (
    <>
      {label && <ProgressText>{label}</ProgressText>}
      <ProgressBarContainer style={progressBarStyle}>
        <ProgressBarFill progress={progress} />
      </ProgressBarContainer>
      {subLabel && <ProgressText>{subLabel}</ProgressText>}
    </>
  );
};

export default ProgressBar;
