// 하나 빼기 (One Away)
  // 문자열을 편집하는 방법에는 세 가지 종류가 있다. - 문자열 삽입, 삭제, 교체
  // 문자열 2개가 주어졌을 때, 문자열을 같게 만들기 위한 편집 횟수가 1회 이내인지 확인하는 함수를 작성하라.

  // apple, aple -> true
  // aple, apple -> true
  // more, core -> true 
  // abc, ade -> false


// 1. 교체 : 두 개의 문자열 길이를 비교, 길이가 같다면 교체 사실 체크
// 2. 삽입 : 두 개의 문자열 길이를 비교, 두 글자의 길이가 1글자 차이인 경우 진행
// 3. 삭제 : 문자 삽입의 정반대


// 문자열 교체 (Helper Function)
const checkEditReplace = (str1, str2) => {
  let edits = 0;  // 편집 횟수를 추적해주는 변수
  for(let i=0; i < str1.length; i++) {
    if(str1[i] !== str2[i]) {
      edits++;
    }
  }
  return edits < 2;
}


// 문자열 삽입, 삭제 (Helper Function)
const checkEditInsertOrDelete = (str1, str2) => {
  let index1 = 0;
  let index2 = 0;
  while(index1 < str1.length && index2 < str2.length) {
    if(str1[index1] !== str2[index2]) {   // 다른 글자가 발견되면 두 번째 인덱스만 앞으로 한 칸 이동
      if(index1 !== index2) {   // 편집 횟수가 1회 이상이 되므로 false를 리턴
        return false;
      }
      index2++;   
    } else {  // 각각의 글자가 같으면 두 인덱스 모두 한 칸씩 앞으로 이동
      index1++;
      index2++;
    }
  }
  return true;
}


// Main Function
function oneAway(str1, str2) {
  if(str1.length === str2.length) {
    return checkEditReplace(str1, str2);
  } else if (str1.length -1 === str2.length) {   // 첫 번째 input의 길이가 더 짧은 경우
    return checkEditInsertOrDelete(str2, str1);
  } else if (str1.length +1 === str2.length) {   // 첫 번째 input의 길이가 더 긴 경우
    return checkEditInsertOrDelete(str1, str2);
  }
  return false;
}



console.log(
  oneAway("apple", "aple"),
  "true",
  oneAway("aple", "apple"),
  "true",
  oneAway("more", "core"),
  "true",
  oneAway("abc", "ade"),
  "false",
);