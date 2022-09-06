// 프로그래머스
// 2022 KAKAO BLIND RECURITS
// 신고 결과 받기

// 내풀이

function solution(id_list, report, k) {
  const userData = id_list.map(id => {
    return { id, from: new Set(), response: 0 };
  });

  const reportData = report.map(test => {
    return test.split(' ');
  });

  reportData.map(([from, to]) => {
    userData.map(user => {
      if (user.id === to) {
        user.from.add(from);
      }
    });
  });

  userData.map(user => {
    const data = [...user.from];

    if (data.length >= k) {
      data.map(from => {
        userData.map(user => {
          if (user.id === from) {
            user.response += 1;
          }
        });
      });
    }
  });

  const answer = userData.map(user => user.response);

  return answer;
}

// 다른 사람 풀이

function solution2(id_list, report, k) {
  let reports = [...new Set(report)].map(a => {
    return a.split(' ');
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map(a => good.get(a) || 0);
  return answer;
}

const id_list1 = ['muzi', 'frodo', 'apeach', 'neo'];
const report1 = [
  'muzi frodo',
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
];
const k1 = 2;

const id_list2 = ['con', 'ryan'];
const report2 = ['ryan con', 'ryan con', 'ryan con', 'ryan con'];
const k2 = 3;

const id_list3 = ['muzi', 'frodo', 'apeach', 'neo'];
const report3 = ['muzi frodo', 'apeach frodo', 'apeach neo', 'muzi neo'];
const k3 = 1;

console.log(solution(id_list1, report1, k1)); // [ 2, 1, 1, 0 ]
console.log(solution(id_list2, report2, k2)); // [ 0, 0 ]
console.log(solution(id_list3, report3, k3)); // [ 2, 0, 2, 0 ]

console.log(solution2(id_list1, report1, k1)); // [ 2, 1, 1, 0 ]
console.log(solution2(id_list2, report2, k2)); // [ 0, 0 ]
console.log(solution2(id_list3, report3, k3)); // [ 2, 0, 2, 0 ]
