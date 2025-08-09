import { useState } from 'react';

export default function InputForm({ onSubmit }) {
  const [n, setN] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(n, 10);
    if (num > 0) {
      onSubmit(num);
      setN('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline">
      <label htmlFor="input-n" className="sr-only">
        Introduce un número entre 1 y 20 por favor:
      </label>
      <input
        id="input-n"
        type="number"
        value={n}
        onChange={(e) => setN(e.target.value)}
        min="1"
        max="20"
        required
      />
      <button type="submit" className="btn-small">
        Calcular
      </button>
    </form>
  );
}
