
import { useEffect } from 'react';
import SerieNumerica from './SerieNumeric';

export default function SerieCalculator({ n, onResult }) {
  useEffect(() => {
    if (n != null) {
      const { resultado, pasos } = SerieNumerica.calcularTerminoConPasos(n);
      onResult({ resultado, pasos });
    }
  }, [n, onResult]);

  return null; 
}
