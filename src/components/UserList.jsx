// src/components/UserList.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import UserProfile from './UserProfile';

const UserList = React.memo(() => {
  const { users } = useContext(AppContext);

  return (
    <div>
      <h2>Список користувачів</h2>
      {users.map(user => (
        <UserProfile key={user.id} user={user} />
      ))}
    </div>
  );
});

export default UserList;
