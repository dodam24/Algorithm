// 팰린드롬 / 회문 (Palindrome)
// - 앞으로 & 뒤로 읽었을 때 같은 문자열
// - 예) level, eye, hannah

// 문제
// 입력받은 문자열이 팰린드롬인지 판별하는 알고리즘을 구현

// 예제
/*
level -> true
david -> false
eye -> true
*/


// 1. 추가 문자열 활용
function checkPalindrome(str) {
  let reversed = "";
  for (let i = str.length-1; i >= 0; i--) { // 맨 오른쪽 끝에서 왼쪽 방향으로 반복문 돌기
    reversed += str[i]
  }
  return reversed === str
}

console.log(checkPalindrome("abba"))  // treu
console.log(checkPalindrome("david")) // false
console.log(checkPalindrome("eye")) // true



// 2. Two Pointer(투 포인터) 활용
// 문자열의 시작과 끝을 비교하는 방법
function checkPalindrome(str) {
  const len = str.length
  const middle = Math.floor(len / 2)  // 길이의 절반값을 구함

  for (let i = 0; i < middle; i++) {
    if (str.charAt(i) !== str.charAt(len - 1 - i)) { // 시작 포인터와 끝 포인터의 글자가 다르면 false 리턴
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome("abba"))
console.log(checkPalindrome("david"))
console.log(checkPalindrome("eye"))