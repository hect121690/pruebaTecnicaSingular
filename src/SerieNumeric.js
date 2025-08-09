export default class SerieNumeric {
  // Array con los primeros 20 números de Fibonacci (1-indexado)
  static fibCache = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
    89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946
  ];

  static fibonacci(n) {
    if (n < 1 || n > 20) throw new Error("n debe estar entre 1 y 20");
    return this.fibCache[n];
  }

  static triangular(n) {
    return (n * (n + 1)) / 2;
  }

  static primo(n) {
    const primos = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
      31, 37, 41, 43, 47, 53, 59, 61, 67, 71
    ];
    if (n < 1 || n > 20) throw new Error("n para primo debe estar entre 1 y 20");
    return primos[n - 1];
  }

  static calcularTerminoConPasos(n) {
    if (n < 1 || n > 20) throw new Error("n debe estar entre 1 y 20");

    const fib = this.fibonacci(n);
    const tri = this.triangular(n);
    const pri = this.primo(n);
    const resultado = fib - 2 * tri + pri;

    const pasos = [
      `fibonacci(${n}) = ${fib}`,
      `triangular(${n}) = ${tri}`,
      `primo(${n}) = ${pri}`,
      `serie(${n}) = fibonacci(${n}) - 2*triangular(${n}) + primo(${n})`,
      `serie(${n}) = ${fib} - 2*${tri} + ${pri} = ${resultado}`
    ];

    return { resultado, pasos };
  }

  static calcularTermino(n) {
    return this.calcularTerminoConPasos(n).resultado;
  }

}
