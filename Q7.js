const { log } = console;
//
// ㅜ 주어진 배열에서 공통된 항목 찾기
// ㅜ 정렬된 배열이라고 가정할 것
// ㅜ [1,2,3,3],[3,4,5],[2,3,4,7,8] -> output [3]
function commonElements(kArray) {
  //
  return kArray[0].reduce((prev, curr) => {
    //
    let allSame = true;
    //
    kArray.forEach((el) => {
      //
      const isSame = el.some(value => value === curr);
      if (!isSame) {
        //
        allSame = false;
        return;
      };
    });
    if (allSame) {
      return [...prev, curr];
    }
    //
    else {
      return [...prev];
    };
  }, new Array());
}
log(
  commonElements([
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2],
  ])
);
//
// 09.14.01 수정
