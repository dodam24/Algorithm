// 순열 확인
// 문자열 두 개가 주어졌을 때, 이 둘이 서로 순열 관계에 있는지 확인하는 메서드를 작성하라.

// input -> fn(stringA, stringB) 빈 문자열 X
// output -> 순열 관계 확인 -> 맞으면 true, 아니면 false

// 조건
// 1. 길이가 같아야 함
// 2. 서로 구성 요소가 같아야 함


// 첫 번째 방법
/* 
function checkPermutation(stringA, stringB) {
  if(stringA.length !== stringB.length) {
    return false;
  }
  let sortedStringA = stringA.split("").sort().join("");
  let sortedStringB = stringB.split("").sort().joint("");

  return sortedStringA === sortedStringB;
}
*/


// 두 번째 방법 (hash map 사용)
  // stringA의 문자열 각각의 출현 빈도를 저장!  ex. { a:2, b:1 }
  // stringB -> 반복문 -> 출현 빈도값을 hash map과 비교
  // 현재 글자가 hash map에 존재하고, 값이 0이 아닐 경우 -1을 해준다.

function checkPermutation(stringA, stringB) {
  if(stringA.length !== stringB.length) {
    return false;
  }
  let counts = new Map();
  for(let char of stringA) {
    counts.set(char, counts.has(char) ? counts.get(char) +1 : 1);   // key가 있으면 +1, 아니면 1을 반환
  }
  for(let char of stringB) {
    if(counts.get(char) && counts.get(char) !== 0) {  // hash map에 존재하고, 값이 0이 아닐 때
      counts.set(char, counts.get(char) -1);
    } else {
      return false;
    }
  }
  return true;
}


// 테스트 케이스
console.log(checkPermutation("a", "aab"), "false");
console.log(checkPermutation("aba", "abb"), "false");
console.log(checkPermutation("hooh", "oohh"), "true");
console.log(checkPermutation("aaabbbccc", "abcabcabc"), "true");
console.log(checkPermutation("abaa", "abba"), "false");