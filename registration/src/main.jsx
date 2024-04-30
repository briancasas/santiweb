// main.jsx
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
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/galeria">
            <Galeria />
          </Route>
          <Route path="/reservaweb">
            <ReservaWeb />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));