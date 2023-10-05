/*
주어진 문자열 내의 모든 공백을 '%20' 으로 바꾸는 메서드를 작성하라.
문자열 끝에 추가로 필요한 문자들을 더할 수 있는 충분한 공간이 있다고 가정한다.
공백을 포함하는 문자열의 길이도 함께 주어진다고 가정한다.

fn(s, n)  // 문자열, 문자열의 길이

input: "Mr John Smith   ", 13
output: "Mr%20John%20Smith"
*/


// built-in 함수 사용 : trim()
function urlify(s, n) {
  let toArray = s.trim().split("");
  for(let i in toArray) {
    if(toArray[i] === ' ') {
      toArray[i] = '%20'
    }
  }
  return toArray.join("");
}


// built-in 함수 X, 포인터 활용
//  ex) s = " a b c ", n = 5
// 1. 문자열의 실제 길이 = n
// 2. 문자열 내부의 공백의 개수 = s.length - n
// 3. 문자열의 앞, 뒤에 있는 공백 처리 후, 문자열 사이의 공백을 '%20'으로 변경

function urlify(s, n) {
  let output = "";
  let whitespace = s.length - n
  let actualStartIndex = 0;

  // 문자열의 앞에 있는 공백 처리
  let flag = false;
  for(let i=0; i < s.length; i++) {
    if(s[i] === ' ' && !flag) {
      actualStartIndex++
    } else {
      flag = true;
    }
  }

  // 문자열의 뒤에 있는 공백 처리
  // 인덱스가 실제 문자열 길이 밖으로 나가는 것을 방지
  for(let i = actualStartIndex; i < s.length - (whitespace - actualStartIndex); i++) {
    output += s[i] === ' ' ? '%20' : s[i];
  }
  return output
}


// 테스트 케이스
console.log(
  urlify("Mr John Smith   ", 13) === "Mr%20John%20Smith",
  urlify(" Mr John Smith   ", 13) === "Mr%20John%20Smith",
  urlify("   Coding Moon ", 11) === "Coding%20Moon"
);