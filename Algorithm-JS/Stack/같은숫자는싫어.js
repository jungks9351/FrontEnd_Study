// 프로그래머스
// 같은 숫자는 싫어

// 내풀이

function solution1(arr) {
  const stack = [];

  arr.map(item => {
    stack.push(item);

    if (stack[stack.length - 1] === stack[stack.length - 2] && stack.length > 0) {
      stack.pop();
    }
  });
  return stack;
}

// 다른 사람 풀이
function solution2(arr) {
  const result = arr.filter((item, i) => arr[i + 1] !== arr[i]);
  return result;
}

const arr = [1, 1, 3, 3, 0, 1, 1];
console.log(solution1(arr)); // [ 1, 3, 0, 1 ]
console.log(solution2(arr)); // [ 1, 3, 0, 1 ]
