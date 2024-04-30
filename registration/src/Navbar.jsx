// Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-center">
        <li className="mr-6">
          <a href="/">Inicio</a>
        </li>
        <li className="mr-6">
          <a href="/nosotros">Nosotros</a>
        </li>
        <li className="mr-6">
          <a href="/galeria">Galería de Imágenes</a>
        </li>
        <li className="mr-6">
          <a href="/reservaweb">Reserva Web</a>
        </li>
        <li>
          <a href="/contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
