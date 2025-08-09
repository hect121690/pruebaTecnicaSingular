import React, { useState } from 'react';
import InputForm from './InputForm';
import SerieCalculator from './SerieCalculator';
import ResultadoDisplay from './ResultDisplay';
import './app.css';

export default function App() {
  const [n, setN] = useState(null);
  const [resultadoData, setResultadoData] = useState(null);

  const handleCalcular = (numero) => {
    setN(numero);
    setResultadoData(null);
  };

  const handleResultado = (data) => {
    setResultadoData(data);
  };

  const handleRegresar = () => {
    setResultadoData(null);
    setN(null);
  };

  return (
    <div className="container">
      <h1>Prueba tecnica Singular</h1>

      {!resultadoData && (
        <>
          <p>
            Esta aplicación calcula el término n de la serie:  
            <br />
            <em>serie(n) = fibonacci(n) - 2 * triangular(n) + primo(n)</em>
          </p>
          <InputForm onSubmit={handleCalcular} />
        </>
      )}

      {n !== null && !resultadoData && (
        <SerieCalculator n={n} onResult={handleResultado} />
      )}

      {resultadoData !== null && (
        <ResultadoDisplay
          n = {n}
          resultado={resultadoData.resultado}
          pasos={resultadoData.pasos}
          onRegresar={handleRegresar}
        />
      )}
    </div>
  );
}
