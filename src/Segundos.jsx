import React, { useState } from 'react'

function Segundos() {
  const [entrada, setEntrada] = useState(0)
  const [tiempoConvertido, setTiempoConvertido] = useState('00:00:00')

  const ConvertirSegundos = (segundos) => {
    var horas = Math.floor(segundos / 3600);
    horas = (horas < 10) ? '0' + horas : horas;
    var minutos = Math.floor((segundos / 60) % 60);
    minutos = (minutos < 10) ? '0' + minutos : minutos;
    var segundos = segundos % 60;
    segundos = (segundos < 10) ? '0' + segundos : segundos;
    return horas + ':' + minutos + ':' + segundos;
  };

  const convertirTiempo = () => {
    const totalSegundos = parseInt(entrada, 10);
    const tiempoFormateado = ConvertirSegundos(totalSegundos);
    setTiempoConvertido(tiempoFormateado);
    console.log(`Tiempo Convertido: ${tiempoFormateado}`);
  };

  return (
    <div>
      <h1>Convertidor</h1>
      <label>
        Escribe los segundos a convertir:
        <input
          type="number"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
        />
      </label>
      <button onClick={convertirTiempo}>Convertir</button>
      <div>
        <p>Tiempo Convertido: {tiempoConvertido}</p>
      </div>
    </div>
  );
}

export default Segundos