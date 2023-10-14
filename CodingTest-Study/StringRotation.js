/*
  한 단어가 다른 단어에 포함된 문자열인지 판별하는 isSubstring이라는 메서드가 있다.
  s1과 s2의 두 문자열이 주어졌을 때, s2가 s1을 회전시킨 결과인지 판별하는 코드를 isSubstring을 한 번만 호출하여 작성하라.
  (예를 들어 'waterbottle'은 'erbottlewat'을 회전시켜 얻을 수 있는 문자열이다.)
*/


// 방법 1.
function isSubstring(s1, s2) {
  let i = 0;
  while(i < s1.length) {
    s1 = s1.slice(1).concat(s1[0]);  // 맨 앞 글자를 우측(맨 뒤)으로 보내서(회전) 새로운 문자로 변환 
    if(s1 === s2) {
      return true;
    }
    i++
  }
  return false;
}

function stringRetation(s1, s2) {
  if(s1.length !== s2.length) {
    return false;
  }
  return isSubstring(s1, s2);
}


// 방법 2.
  // s1(xy) 2개를 연결해서(= xyxy) s2(yx)가 해당 문자의 부분 문자열인지 확인 
  // ex. 문자열 abcde, cdeab가 있을 때, ab와 cde를 각각 x, y로 치환 (= ab/cde, cde/ab)
function isSubstring(s1, s2) {
  return s1.concat(s1).indexOf(s2) > -1;
}

function stringRotation(s1, s2) {
  if(s1.length !== s2.length) {
    return false;
  }
  return isSubstring(s1, s2);
}



console.log(
  stringRotation("waterbottle", "erbottlewat"), // true
  stringRotation("abcde", "cdeab"), // true
  stringRotation("abcde", "abced"), // false
  stringRotation("moon", "moon"), // true
);