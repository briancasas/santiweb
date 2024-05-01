// Contacto.jsx
import React from 'react'

function Contacto() {
  const handleInvalidInput = (e) => {
    e.preventDefault();
    alert("Advertencia: El nombre solo acepta letras.");
  };
  return (
    <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h2 className="text-2xl font-bold mb-4">¡Contactenos!</h2>
      <p className="mb-8">¡Ponte en contacto con nosotros por cualquier pregunta o consulta que puedas tener!</p>
      <form>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nombre</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              pattern="[a-zA-Z\s]*"
              placeholder="Tu nombre"
              onInvalid={handleInvalidInput}
            />
          </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Correo electrónico</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="tucorreo@ejemplo.com" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Asunto</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Asunto del mensaje" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Mensaje</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Escribe tu mensaje aquí"></textarea>
        </div>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;