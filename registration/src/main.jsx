import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Nosotros from './Nosotros';
import Galeria from './Galeria';
import ReservaWeb from './ReservaWeb';
import Contacto from './Contacto';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/reservaWeb" element={<ReservaWeb />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>  );
}

ReactDOM.render(<App />, document.getElementById('root'));