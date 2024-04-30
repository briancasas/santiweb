// ReservaWeb.jsx
import React, { useState } from 'react';

function ReservaWeb() {
  const [selectedHorario, setSelectedHorario] = useState(null);
  const [citas, setCitas] = useState([]);
  const horariosDisponibles = [
    "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", 
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", 
    "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  const handleSelectHorario = (horario) => {
    setSelectedHorario(horario);
  };

  const handleRegistrarCita = (cita) => {
    const existeCita = citas.find(c => c.horario === cita.horario);
    if (existeCita) {
      alert("¡El horario seleccionado ya está reservado!");
    } else {
      setCitas([...citas, cita]);
      setSelectedHorario(null); // Reiniciar la selección de horario después de la reserva
      alert("¡Reserva exitosa!");
    }
  };

  return (
    <div>
      <h2>Reserva Web</h2>
      <div className="my-8 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Agenda de Citas</h3>
        <div className="grid grid-cols-3 gap-4">
          {horariosDisponibles.map((horario, index) => {
            const cita = citas.find(c => c.horario === horario);
            const disponible = !cita;
            const colorFondo = disponible ? "bg-blue-200 cursor-pointer" : "bg-red-200";
            return (
              <div key={index} className={`border border-gray-300 rounded-md p-2 ${colorFondo}`}
                onClick={() => disponible && handleSelectHorario(horario)}>
                <div className="text-lg font-semibold">{horario}</div>
                <div className="text-gray-500">{disponible ? "Disponible" : "Ocupado"}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-8 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Registro de Clientes</h3>
        <form onSubmit={(e) => { e.preventDefault(); }}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">Nombre:</label>
            <input type="text" id="nombre" name="nombre" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="telefono" className="block text-gray-700 font-bold mb-2">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>
          <button type="button" onClick={() => handleRegistrarCita({ nombre: "Cliente", telefono: "123456789", horario: selectedHorario })} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Reservar</button>
        </form>
      </div>
    </div>
  );
}

export default ReservaWeb;
