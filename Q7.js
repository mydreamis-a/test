const { log } = console;
//
// ㅜ 주어진 배열에서 공통된 항목 찾기
// ㅜ 정렬된 배열이라고 가정할 것
// ㅜ [1,2,3,3],[3,4,5],[2,3,4,7,8] -> output [3]
function commonElements(kArray) {
  //
  kArray.forEach((el, idx, arr) => {
    el.reduce((prev, curr) => {
      //
      for (let i = 0; i < arr.length; i++) {
        //
        if (!el.some((value) => value === curr)) {
          break;
        }
        //
        return [...prev, curr];
      }
    }, new Array());
  });
}
log(
  commonElements([
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2],
  ])
);
