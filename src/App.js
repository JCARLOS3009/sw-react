import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar'; // Importando o componente MenuBar
import Home from './components/Home'; // Página Home
import Characters from './components/Characters'; // Página de personagens
import Planets from './components/Planets'; // Página de planetas
import About from './components/About'; // Página Sobre

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/planets" element={<Planets />} /> {/* Rota para planetas */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
