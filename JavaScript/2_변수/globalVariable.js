// 전역 변수 x 생성
let x = 'global';

const func = () => {
  // 지역 변수 x 생성
  let x = 'local'; // 변수 x 값 할당
  console.log(x); // local
  return x;
  // 지역 변수 x 소멸
};

func();
console.log(x); // global
// 프로그램 종료시 전역 변수 x 소멸
