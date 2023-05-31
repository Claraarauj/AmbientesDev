// Arquivo de teste para o algoritmo de cálculo do MDC

function calcularMDC(a, b) {
  var maior, mdc = 1;

  if (a > b) {
    maior = a;
  } else {
    maior = b;
  }

  for (let i = 2; i < maior; ++i) {
    while ((a % i == 0) && (b % i == 0)) {
      a /= i;
      b /= i;
      mdc *= i;
    }
  }

  return mdc;
}

// Teste para verificar o resultado do cálculo do MDC
test('Teste de cálculo do MDC', () => {
  // Entrada mockada
  const a = 36;
  const b = 48;

  // Execução da função para obter o resultado
  const resultado = calcularMDC(a, b);

  // Verificação do resultado esperado
  expect(resultado).toBe(12);
});
