
function sum(a, b) {
    return a + b;
  }
  
  
  function testSum() {
    const testCases = [
      { a: 2, b: 3, expected: 5 },
      { a: -5, b: 10, expected: 5 },
      { a: 0, b: 0, expected: 0 },
      { a: 1.5, b: 2.5, expected: 4 },
    ];
  
    for (const testCase of testCases) {
      const result = sum(testCase.a, testCase.b);
      const status = result === testCase.expected ? 'PASS' : 'FAIL';
      console.log(`Test case: ${testCase.a} + ${testCase.b} - Expected: ${testCase.expected} - Result: ${result} - Status: ${status}`);
    }
  }
  
  testSum();
  