const isPrimeNumber = number => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrimeNumber(2));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(3));
