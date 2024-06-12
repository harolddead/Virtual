import React from 'react';
import adidas from './assets/img/adidas.jpg';
import './App.css';

// Codigo Buscador

var busqueda = document.getElementById('buscar');
var lupa = document.getElementById('lupa');
lupa.style.left = parseInt(busqueda.offsetLeft) + 39.5 + '%';
lupa.style.top = parseInt(busqueda.offsetTop) + 9 + '%';

var busqueda = document.getElementById('buscar');
var lupa = document.getElementById('lupa');

document.addEventListener('DOMContentLoaded', () => {
  const datos = [
    'Artículo 1: Introducción a JavaScript',
    'Artículo 2: CSS para Principiantes',
    'Artículo 3: HTML y sus Etiquetas',
    'Artículo 4: React para Desarrollo Web',
    'Artículo 5: Node.js y Express',
    // Agrega más datos aquí
  ];

  const buscarInput = document.getElementById('buscar');
  const resultadosDiv = document.getElementById('resultados');

  buscarInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const resultados = datos.filter((item) =>
      item.toLowerCase().includes(query)
    );

    mostrarResultados(resultados);
  });

  function mostrarResultados(resultados) {
    resultadosDiv.innerHTML = '';
    if (resultados.length === 0) {
      resultadosDiv.innerHTML = '<p>No se encontraron resultados</p>';
    } else {
      resultados.forEach((result) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('resultado-item');
        itemDiv.textContent = result;
        resultadosDiv.appendChild(itemDiv);
      });
    }
  }
});

// Codigo Buscador

// Actualiza la posición del icono si el tamaño del input cambia
busqueda.addEventListener('input', function () {
  lupa.style.right = '10px'; // Ajusta la posición según sea necesario
});

// Define el componente funcional App
const App = (_) => {
  return (
    // Renderiza un div contenedor
    <div>
      {/* Muestra la imagen importada */}
      <img src={adidas} />
    </div>
  );
};

// Exporta el componente App como el export por defecto
export default App;
