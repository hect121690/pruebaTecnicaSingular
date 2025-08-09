import SerieNumeric from './SerieNumeric';

describe('SerieNumeric calcularTermino', () => {
  test.each([
    [1, 1],
    [2, -2],
    [3, -5],
    [4, -10],
    [5, -14],
    [6, -21],
    [7, -26],
    [8, -32],
    [9, -33],
    [10, -26],
  ])('Prueba (%i) debe ser %i', (n, expected) => {
    expect(SerieNumeric.calcularTermino(n)).toBe(expected);
  });
});
