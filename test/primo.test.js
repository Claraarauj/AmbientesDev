
function isPrime(number) {
  if (number <= 1) {
    return false;
  }


  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}


function testIsPrime() {
  const testCases = [
    { number: 2, expected: true },
    { number: 3, expected: true },
    { number: 4, expected: false },
    { number: 5, expected: true },
    { number: 10, expected: false },
    { number: 13, expected: true },
    { number: 20, expected: false },
  ];

  for (const testCase of testCases) {
    const result = isPrime(testCase.number);
    const status = result === testCase.expected ? 'PASS' : 'FAIL';
    console.log(`Test case: ${testCase.number} - Expected: ${testCase.expected} - Result: ${result} - Status: ${status}`);
  }
}


testIsPrime();
