const { log } = console;
//
// ㅜ 소인수를 구하는 함수
// ㅜ 소인수 분해란 자연수를 소인수로 분해하는 것
// ㅜ 10의 인수는 1,2,5,10 -> 소수는 2,5이므로 소인수는 2,5
function primeFactor(n) {
  //
  const arr = new Array();
  //
  for (let i = 2; i < n; i++) {
    //
    if (!(n % i)) {
      //
      let decimal = true;
      //
      for (let j = 2; j < i; j++) {
        //
        if (!(i % j)) {
          //
          decimal = false;
          break;
        }
      }
      if (decimal === true) {
        //
        arr.push(i);
      }
    }
  }
  return arr.join(", ");
}
log(primeFactor(10));
//
// 09.13.16 수정
