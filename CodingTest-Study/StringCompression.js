// 문자열 압축(String Compression)
  // 반복되는 문자의 개수를 세는 방식의 기본적인 문자열 압축 메서드를 작성하라.
  // 예를 들어 문자열 aabcccccaaa를 압축하면 a2b1c5a3이 된다.
  // 만약 압축된 문자열의 길이가 기존 문자열의 길이보다 길다면 기존 문자열을 반환해야 한다.
  // 문자열은 대소문자 알파벳(a-Z)로만 구성되어 있다.


// 풀이 순서
  // 1. output 변수를 배열로 생성
  // 2. count 변수의 시작은 1
  // 3. input 순회 -> 문자의 반복 여부 확인
  //   -> 반복 O : count 변수 ++
  //   -> 반복 X : output에 추가, count 변수 리셋
  // 4. output 변수의 길이와 input 길이 비교 후, 조건에 따라서 리턴


// 코드 구현
function stringCompression(s) {
  let output = [];
  let count = 1;

  for(let i=0; i < s.length; i++) {
    let current = s[i];
    let next = s[i+1];
    if(current === next) {
      count++;
    } else {
      output.push(current + count);
      count = 1;
    }
  }
  out = output.join("");
  return output.length < s.length ? out: s;
}


// 테스트
console.log(
  stringCompression("aabcccccaaa"), // a2b1c5a3
  stringCompression("aa"), // aa
  stringCompression("aaaAAaa"), // a3A2a2
  stringCompression("aacbba"),  // a2c1b2a1 -> aacbba
);
