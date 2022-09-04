// 프로그래머스
// 큐_프린터 실습

// 내풀이

function solution(priorities, location) {
  let answer = 0;
  let count = 0;

  while (priorities.length > 0) {
    let first = priorities.shift();
    if (priorities.filter(priority => priority > first).length > 0) {
      priorities.push(first);
    } else {
      count += 1;
      if (location == 0) {
        return (answer = count);
      }
    }
    location -= 1;
    if (location === -1) {
      location = priorities.length - 1;
    }
  }
  return answer;
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
