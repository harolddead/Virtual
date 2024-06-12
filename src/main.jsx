// Importa la biblioteca de React, necesaria para trabajar con componentes de React
import React from 'react';
// Importa la biblioteca de ReactDOM, necesaria para renderizar componentes de React en el DOM
import ReactDOM from 'react-dom/client';
// Importa el componente principal de la aplicación desde el archivo App.jsx
import App from './App.jsx';
// Importa el archivo de estilos CSS global
import './index.css';
// Importa el archivo de estilos CSS específico para el componente App
import './App.css';

// Encuentra el elemento con el id 'root' en el DOM y lo utiliza como el punto de montaje de la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
  // Renderiza el componente App envuelto en React.StrictMode, que activa comprobaciones y advertencias adicionales en desarrollo
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
