// 선택 정렬(Selection Sort)

  // 1. 주어진 배열 중에 최소값을 찾는다.
  // 2. 그 값을 맨 앞에 위치한 값과 교체한다. (pass)
  // 3. 맨 처음 위치를 뺀 니머지 배열을 같은 방법으로 교체한다.


function solution(arr) {

  let answer = arr;
  for(let i = 0; i < arr.length-1; i++) {
    let idx = i;
    for(let j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));