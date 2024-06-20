import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { GlobalStyles } from './styles/GlobalStyles';
import theme from './styles/theme';


import Footer from './components/Footer/Footer';

import { ThemeProvider } from 'styled-components';

const App = () => {
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage toggleTheme={toggleTheme} themeMode={themeMode} />,
    },
    {
      path: "/project/:id",
      element: <ProjectDetailsPage toggleTheme={toggleTheme} themeMode={themeMode} />,
    },
  ]);

  return (
      <ThemeProvider theme={theme[themeMode]} >
          <GlobalStyles />
              
              <RouterProvider router={router} />
        </ThemeProvider>
  );
};

export default App;
