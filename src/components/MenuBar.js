import React from 'react';
import { Link } from 'react-router-dom'; // Caso queira usar navegação com React Router

import './MenuBar.css'; // Arquivo CSS para estilizar a barra de menu

function MenuBar() {
  return (
    <div className="menu-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>  {/* Usando o Link do React Router para navegação */}
        </li>
        <li>
          <Link to="/characters">Personagens</Link>
        </li>
        <li>
          <Link to="/Planets">Planetas</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuBar;
