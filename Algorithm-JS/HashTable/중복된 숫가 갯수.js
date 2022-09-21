function solution(number) {
  const newArr = String(Math.abs(number)).split('');

  const hash = {};
  newArr.map(arg => {
    if (!hash[arg]) {
      hash[arg] = 1;
    } else {
      hash[arg] += 1;
    }
  });

  const hashKeys = Object.keys(hash);
  const hashValues = Object.values(hash);

  const temp = [];

  for (let i = 0; i < hashKeys.length; i++) {
    temp.push(parseInt(hashKeys[i]));
    temp.push(parseInt(hashValues[i]));
  }

  const result = Number(temp.toString().replace(/\,/g, ''));
  return result;
}

/*
112233 122232
223344 223242
1341 123141
input이 음수 일때는 양수로 변경하여 반환
-1341 123141
*/

console.log(solution(112233));
console.log(solution(223344));
console.log(solution(1341));
console.log(solution(-1341));
