const { log } = console;
//
// ㅜ 십진수를 이진수로 변환하는 함수 (재귀 함수 사용)
function base10ToString(n, arr = new Array()) {
  //
  let power = 0;
  const base = 2;
  console.log("dsfds 1");
  //
  while (true) {
    if (n < Math.pow(base, power)) {
      //
      break;
    }
    power++;
  }
  n = n - Math.pow(base, power - 1);
  //
  arr[power - 1] = 1;
  //
  if (n >= base) {
    //
    return base10ToString(n, arr); //
  }
  arr[0] = n;
  //
  for (let i = 0; i < arr.length; i++) {
    //
    if (arr[i] === undefined) {
      //
      arr[i] = 0;
    }
  }
  return arr.reverse().join(", ");
}
log(base10ToString(100));

// 09.13.17 수정
