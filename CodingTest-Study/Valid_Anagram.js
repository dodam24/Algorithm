// 애너그램 판별
  // 두 단어의 글자 나열 순서는 다르지만, 구성이 일치할 때
  //ex. LISTEN <-> SILENT

const stringA = "listen";
const stringB = "silent";


// #1. split(), sort(), and join()

function isAnagram(strA, strB) {
  if(strA.length !== strB.length) {
    return false;
  }
  return strA.split("").sort().join() === strB.split("").sort().join();
}

console.log(isAnagram(stringA, stringB));



// #2. map = {} (hash map 사용)

function isAnagram(strA, strB) {
  if(strA.length !== strB.length) { // 두 문자열의 길이가 다르면 애너그램 X
    return false;
  }
  const hashMap = {}  // 문자 빈도수를 저장할 hash Map 객체 생성
  for (const char of strA) {
    // { l: 1, i: 1, s: 1, t: 1, e: 1 }
    hashMap[char] = hashMap[char] ? hashMap[char] +1 : 1; // 문자가 이미 hash Map에 존재하면 빈도수를 증가시키고, 아니면 1로 초기화
  }

  for(const char of strB) {
    if(!hashMap[char]) {  // hash Map에 문자가 존재하지 않으면 애너그램 X
      return false;
    }
    hashMap[char]--;
  }
  return true;
}

console.log(isAnagram(stringA, stringB));