import React, { useState, useEffect } from "react";

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/souzarodrigoap/repos')
    const data = await response.json();

    setRepositories(data);
  }, []);

  function handleAddRepository() {
    setRepositories([ 
      ...repositories, 
      { id: Math.random(), name:"novo-repo"}
    ]);
  }

  return (
    <>
      <ul>
        { repositories.map ( repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>
        Adicionar repositório
      </button>
    </>
  )
}