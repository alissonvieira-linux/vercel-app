import { useEffect, useState } from 'react';

function HomePage() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/alissonvieira-linux')
      .then(response => response.json())
      .then(data => {
        setUserInfo(data);
      });
  }, []);

  return (
    <div>
      <p>Name: <strong>{userInfo.name}</strong></p>
      <p>Username: <strong>{userInfo.login}</strong></p>
      <p>Bio: <strong>{userInfo.bio}</strong></p>
      <p>City: <strong>{userInfo.location}</strong></p>
    </div>
  );
}

export default HomePage;