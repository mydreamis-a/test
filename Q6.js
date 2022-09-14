const { log } = console;
//
// ㅜ 회문 여부를 판단하는 함수 (재귀 함수 사용)
// ㅜ 주어진 함수 내부를 구현하고 결과에 따라 true 또는 false를 리턴한다.
function isPalindromeRecursive(word) {
  //
  const beginPos = 0;
  word = word.split("");
  const endPos = word.length - 1;
  //
  return isPalindromeRecursiveHelper(word, beginPos, endPos);
}
function isPalindromeRecursiveHelper(word, beginPos, endPos) {
  //
  if (word[beginPos] === word[endPos]) {
    //
    if (beginPos >= endPos / 2) {
      //
      return true;
    }
    beginPos = beginPos + 1;
    endPos = endPos - 1;
    //
    return isPalindromeRecursiveHelper(word, beginPos, endPos);
  }
  //
  else return false;
}
log(isPalindromeRecursive("appleelppa"));
log(isPalindromeRecursive("appleelpaa"));
//
// 09.14.09 수정
