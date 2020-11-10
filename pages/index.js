import { useEffect, useState } from 'react';

import api from '../src/services/api';

function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const users = await api.get('users');
    
    setUsers(users.data);
  }
  
  return (
    <div>
      <h1>Listagem de usuários consumindo API hospedada no Heroku</h1>
      {
        users.map(user => (
          <>
            <p>Name: <strong>{user.name}</strong></p>
            <p>Age: <strong>{user.age}</strong></p>
          </>
        ))
      }
    </div>
  );
}

export default HomePage;