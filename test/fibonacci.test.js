function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  // Teste 1: Verificar o resultado para n = 0
  var resultado1 = fibonacci(0);
  console.log("Resultado para n = 0: " + resultado1); // Deve imprimir 0
  
  // Teste 2: Verificar o resultado para n = 1
  var resultado2 = fibonacci(1);
  console.log("Resultado para n = 1: " + resultado2); 
  // Deve imprimir 1
  
  // Teste 3: Verificar o resultado para n = 5
  var resultado3 = fibonacci(5);
  console.log("Resultado para n = 5: " + resultado3); 
  // Deve imprimir 5
  
  // Teste 4: Verificar o resultado para n = 10
  var resultado4 = fibonacci(10);
  console.log("Resultado para n = 10: " + resultado4); 
  // Deve imprimir 55
  
  // Teste 5: Verificar o resultado para n = 15
  var resultado5 = fibonacci(15);
  console.log("Resultado para n = 15: " + resultado5); 
  // Deve imprimir 610
  