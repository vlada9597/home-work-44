// src/App.jsx
import React from 'react';
import { AppProvider } from './context/AppContext';
import UserList from './components/UserList';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  return (
    <AppProvider>
      <div>
        <h1>Мій додаток з контекстом</h1>
        <ThemeSwitcher />
        <UserList />
      </div>
    </AppProvider>
  );
};

export default App;
