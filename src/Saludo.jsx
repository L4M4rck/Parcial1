import React, { useState } from 'react'

function Saludo() {
  const [nombre, setNombre] = useState('')
  const [hora, setHora] = useState('')
  const [saludo, setSaludo] = useState('')

  const determinarSaludo = () => {
    const horaNumero = parseInt(hora, 10);

    if (horaNumero >= 0 && horaNumero < 12) {
      setSaludo(`Buenos días, ${nombre}`);
    } else if (horaNumero >= 12 && horaNumero < 18) {
      setSaludo(`Buenas tardes, ${nombre}`);
    } else {
      setSaludo(`Buenas noches, ${nombre}`);
    }
    console.log(`${saludo}`)
  };

  return (
    <div>
        <h1>Saludo</h1>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <label>
        Hora (en formato de 24 horas):
        <input
          type="number"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
      </label>
      <button onClick={determinarSaludo}>Determinar Saludo</button>
      <p>{saludo}</p>
    </div>
  );
}

export default Saludo