import { useEffect, useState } from 'react';

function HomePage() {
  const [users, setUsers] = useState({});

  useEffect(() => {
    fetch('https://vieiratech.herokuapp.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

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