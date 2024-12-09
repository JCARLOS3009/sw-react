import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Characters.css'; // Importando o CSS estilizado


function Characters() {
  // Estado para armazenar os personagens
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar os personagens na API
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setCharacters(response.data.results); // Armazena os dados no estado
        setLoading(false);
      })
      .catch(error => {
        setError("Houve um erro ao carregar os personagens.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Personagens de Star Wars</h2>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            <strong>{character.name}</strong> - {character.gender}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;
