import React from 'react';
import ModeToggle from '../ModeToggle/ModeToggle';

const Header = ({ toggleTheme, themeMode }) => {
  return (
    <header className="header">
      <ModeToggle toggleTheme={toggleTheme} themeMode={themeMode} />
      <h1>Mayowa Adeboye</h1>
    </header>
  );
};

export default Header;
