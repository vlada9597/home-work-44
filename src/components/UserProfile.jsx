// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const UserProfile = React.memo(({ user }) => {
  const { theme } = useContext(AppContext);

  const styles = {
    background: theme === 'dark' ? '#333' : '#eee',
    color: theme === 'dark' ? '#fff' : '#000', // текст змінюється відповідно до теми
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
  };

  return (
    <div style={styles}>
      <p>{user.name}</p>
    </div>
  );
});

export default UserProfile;
