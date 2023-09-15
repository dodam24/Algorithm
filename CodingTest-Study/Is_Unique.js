/*
문자열이 주어졌을 때, 이 문자열에 같은 문자가 중복되어 등장하는지 확인하는 알고리즘
*/

/* 테스트 케이스 */
console.log(isUnique(""), "true");
console.log(isUnique("abcd"), "true");
console.log(isUnique("abccd"), "false");
console.log(isUnique("bhjjb"), "false");
console.log(isUnique("mdjq"), "true");
console.log(isUnique("geez"), "false");


// 코드 구현 
// 1. 중첩 반복문
function isUnique(str) {
  for(let i=0; i < str.length; i++) {
    for(let j=i+1; j < str.length; j++) {
      if(str[i] === str[j]) {
        return false;
      }
    }
  }
    return true;
}

// 2. Map() 활용
// map.set(key, value)
// map.has(key)
/*
{
  a: true,
  b: true
}
*/
function isUnique(str) {
  let map = new Map();
  for(let char of str) {

    if(map.has(char)) {
      return false;
    }
    map.set(char, true)
  }
  return true;
}