function combination(set, arr, fixed) {
  if (arr.length < 1) return;

  for (let i = 0; i < arr.length; i++) {
    let newFixed = fixed + arr[i];
    let newArr = [...arr];
    newArr.splice(i, 1);

    set.add(parseInt(newFixed));
    combination(set, newArr, newFixed);
  }
  return set;
}

function isPrimeNumber(number) {
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

function solution(numbers) {
  let answer = 0;
  const set = new Set();
  let arr = numbers.split('');

  const newSet = combination(set, arr, '');

  const numArr = [...newSet];

  numArr.map(num => {
    if (isPrimeNumber(num)) {
      answer += 1;
    }
  });
  return answer;
}

console.log(solution('17')); // 3
console.log(solution('011')); // 2
