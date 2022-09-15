// n : 입국 심사를 기다리는 사람 1 < n < 10억명
// times : 심사관이 한명을 심사하는데 걸리는 시간 1 < time < 10 억분
// 10억을 다 처리하기 위해선 O(nlog n )이 효율적 => 이분 탐색
// answer : 모든 사람이 심사를 받는데 걸리는 최소 시간

function solution(n, times) {
  times.sort((a, b) => a - b);
  // 최소 1분에서 10억분 *n 사이
  let min = 1;
  let max = times[times.length - 1] * n;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    // 시간 / 심사시간 의 합
    const count = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

    if (count < n) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return min;
}

const n = 6;
const times = [7, 10];

console.log(solution(n, times)); // 28

/*
가장 첫 두 사람은 바로 심사를 받으러 갑니다.

7분이 되었을 때, 첫 번째 심사대가 비고 3번째 사람이 심사를 받습니다.

10분이 되었을 때, 두 번째 심사대가 비고 4번째 사람이 심사를 받습니다.

14분이 되었을 때, 첫 번째 심사대가 비고 5번째 사람이 심사를 받습니다.

20분이 되었을 때, 두 번째 심사대가 비지만 6번째 사람이 그곳에서 심사를 받지 않고 1분을 더 기다린 후에 첫 번째 심사대에서 심사를 받으면 28분에 모든 사람의 심사가 끝납니다.
*/
