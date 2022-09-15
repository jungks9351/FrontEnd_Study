// 시간, 입차, 차량번호, 출차여부 나누기

// 차량 조회

function solution(fees, records) {
  let carTable = {};

  records.map(record => {
    // console.log(record)
    const [time, carNumber, isExit] = record.split(' ');
    // console.log(time, carNumber, isExit)
    const [hour, minute] = time.split(':');
    // console.log(hour, minute)
    const changedTime = hour * 60 + parseInt(minute);
    // console.log(changedTime)

    if (!carTable[carNumber]) {
      carTable[carNumber] = {
        carNumber: carNumber,
        inTime: changedTime,
        totalTime: 0,
        isExit: isExit,
      };
    }

    // OUT 일 때 상태 변경
    if (isExit === 'OUT') {
      carTable[carNumber].totalTime += changedTime - carTable[carNumber].inTime;
      carTable[carNumber].isExit = 'OUT';
      return;
    }
    // inTime, isExit In 초기화
    carTable[carNumber].inTime = changedTime;
    carTable[carNumber].isExit = isExit;
  });

  // console.log(carTable)

  const newCarArr = Object.values(carTable).sort(
    (car1, car2) => car1.carNumber - car2.carNumber
  );
  // console.log(newCarArr)

  const answer = newCarArr.map(car => {
    // console.log(car)
    if (car.isExit === 'IN') {
      //  23:59에 출차되었다고 간주 (23 * 60 + 59)
      car.totalTime += 1439 - car.inTime;
    }
    // 종합 시간을 기본 시간 비교 요금 측정
    const fee =
      car.totalTime >= fees[0]
        ? fees[1] + Math.ceil((car.totalTime - fees[0]) / fees[2]) * fees[3]
        : fees[1];
    return fee;
  });

  return answer;
}

const records = [
  '05:34 5961 IN',
  '06:00 0000 IN',
  '06:34 0000 OUT',
  '07:59 5961 OUT',
  '07:59 0148 IN',
  '18:59 0000 IN',
  '19:09 0148 OUT',
  '22:59 5961 IN',
  '23:00 5961 OUT',
];

const fees = [180, 5000, 10, 600];

console.log(solution(fees, records));
// [ 14600, 34400, 5000 ]
