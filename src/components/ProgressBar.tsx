import React from 'react';
import { ProgressBarContainer, ProgressBarFill, ProgressText } from '../styles/StyledComponents';

const ProgressBar = ({ progress, label, subLabel, progressBarStyle }) => {
  return (
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
