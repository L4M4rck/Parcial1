import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Segundos from './Segundos'
import Llamada from './Llamada'
import Saludo from './Saludo'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Segundos />
    <Llamada />
    <Saludo />

  </React.StrictMode>,
)
