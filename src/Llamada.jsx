import React, { useState } from 'react'

function Llamada() {
  const [duracionLlamada, setDuracionLlamada] = useState(0);
  const [costoTotal, setCostoTotal] = useState(0);

  const calcularCosto = () => {
    if (duracionLlamada <= 3) {
      setCostoTotal(100);
    } else {
      const minutosAdicionales = duracionLlamada - 3;
      const costoAdicional = minutosAdicionales * 50;
      setCostoTotal(100 + costoAdicional);
    }
    console.log('Costo Total de la Llamada:' , costoTotal, 'pesos');
  }

  return (
    <div>
      <h1>Llamada</h1>
      <label>
        Duración de la llamada (minutos):
        <input
          type="number"
          value={duracionLlamada}
          onChange={(e) => setDuracionLlamada(e.target.value)}
        />
      </label>
      <button onClick={calcularCosto}>Calcular Costo</button>
      <p>Duración de la llamada: {duracionLlamada} minutos</p>
      <p>Costo Total de la Llamada: {costoTotal} pesos</p>
    </div>
  );
}

export default Llamada;