const { log } = console;
//
// ㅜ 소수 여부를 판단하는 함수
// ㅜ 소수란 1보다 큰 자연수중 1과 자신만을 약수로 가지는 수를 말한다.
// ㅜ 주어진 함수 내부를 구현하고 결과에 따라 true 또는 false를 리턴한다.
function isPrime(n) {
  //
  const arr = new Array();
  //
  for (let i = 1; i <= n; i++) {
    //
    if (!(n % i)) {
      //
      arr.push(i);
    }
  }
  return arr.length === 2 ? true : false;
}
log(isPrime(31));
log(isPrime(10));
//
// 09.13.14 수정
