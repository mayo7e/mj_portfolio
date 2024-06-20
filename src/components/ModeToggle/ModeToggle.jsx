import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.panel};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;

const ModeToggle = ({ toggleTheme, themeMode }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      Switch to {themeMode === 'dark' ? 'Light' : 'Dark'} Mode
    </ToggleButton>
  );
};

export default ModeToggle;
