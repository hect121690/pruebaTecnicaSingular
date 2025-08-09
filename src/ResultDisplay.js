export default function ResultDisplay({n, resultado, pasos = [], onRegresar }) {
  return (
    <div className="result">
      <h3>Resultado del término: {n}</h3>
      <p>{resultado}</p>

        <h4>Pasos del cálculo:</h4>
        <ul>
        {pasos.map((paso, index) => (
            <li key={index}>{paso}</li>
        ))}
        </ul>

      <button className="btn-small" onClick={onRegresar}>
        Regresar
      </button>
    </div>
  );
}
