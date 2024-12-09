import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Planets.css'; // Estilos específicos para Planetas

function Planets() {
  // Estado para armazenar os planetas
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar os planetas na API
  useEffect(() => {
    axios.get('https://swapi.dev/api/planets/')
      .then(response => {
        setPlanets(response.data.results); // Armazenar os planetas no estado
        setLoading(false);
      })
      .catch(error => {
        setError("Houve um erro ao carregar os planetas.");
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
      <h2>Planetas de Star Wars</h2>
      <ul>
        {planets.map((planet, index) => (
          <li key={index}>
            <strong>{planet.name}</strong>
            <p>Clima: {planet.climate}</p>
            <p>População: {planet.population}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Planets;
