// src/context/AppContext.jsx
import React, { createContext, useState } from 'react';

// Створюємо контекст з осмисленим значенням за замовчуванням
export const AppContext = createContext({
  users: [],
  theme: 'light',
  setTheme: () => {},
});

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [users] = useState([
    { id: 1, name: 'Влада' },
    { id: 2, name: 'Олег' },
    { id: 3, name: 'Марія' },
  ]);

  return (
    <AppContext.Provider value={{ users, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};
