// src/components/ThemeSwitcher.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(AppContext);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <button onClick={toggleTheme}>
      Змінити тему: {theme === 'light' ? 'Світла' : 'Темна'}
    </button>
  );
};

export default ThemeSwitcher;
