const { log } = console;
//
// ㅜ 소수 여부를 판단하는 함수
// ㅜ 소수란 1보다 큰 자연수중 1과 자신만을 약수로 가지는 수를 말한다.
// ㅜ 주어진 함수 내부를 구현하고 결과에 따라 true 또는 false를 리턴한다.
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
  return arr.length === 0 ? true : false;
}
log(primeFactor(13));
//
// 09.14.09 수정
