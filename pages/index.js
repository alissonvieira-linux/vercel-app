import { useState } from 'react';

function HomePage() {
  const [counter, setCounter] = useState(0);

  function handleIncrementCounter() {
    setCounter(prevState => prevState + 1);
  }

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={handleIncrementCounter}>Adicionar</button>
    </div>
  );
}

export default HomePage;