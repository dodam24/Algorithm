// 반복문으로 팩토리얼 구현 (재귀 X)
function factorial(num) {
  let total = 1;
  for(let i = num; i > 1; i--) {  // 1은 굳이 곱할 필요 없으므로 i > 0이 아닌 i > 1로 조건을 설정
    total *= i
  }
  return total; 
}
console.log(factorial(5));


// 재귀 호출로 팩토리얼 구현
function factorial(num) {
  if(num === 1) return 1;
  return num * factorial(num-1);
}
console.log(factorial(5));

// 스택 오버플로(stack overflow) : Stack 영역의 메모리가 지정된 범위를 넘어갈 때 발생
// 함수를 재귀적으로 무한정 호출하는 경우 스택 오버플로가 발생할 수 있음



// 헬퍼 함수(helper function) or 헬퍼 메소드 재귀 :
// 재귀적이지 않은 외부 함수가 재귀적인 내부 함수(inner function)을 호출하는 패턴
function collectOddValues(arr) {

  let result = [];

  function helper(helperInput) {
    if(helperInput.length === 0) {
      return;
    }

    if(helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1))  // 첫 번째 항목을 제외한 배열의 모든 항목을 사용해서 호출
    }                             // 이렇게 더 작은 부분 배열(sub array)을 만들어서 helper로 전달하고, 다시 실행
                                  // ex) [2,3,4,5,6,7,8,9] -> [3,4,5,6,7,8,9] -> [4,5,6,7,8,9] -> ... 이런 식으로 반복
  helper(arr)
  
  return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])


// 순수 재귀
function collectOddValues(arr) {
  let newArr = [];  // 함수가 재귀적으로 호출될 때마다 newArr를 정의 -> 배열이 리셋되면서 빈 배열이 된다.

  if(arr.length === 0) {
    return newArr;
  }

  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1))); // [2,3,4,5].slice(1) -> 인덱스 0은 무시하고 인덱스 1부터 끝까지 모든 항목을 반환 -> [3,4,5]
  return newArr;
}

collectOddValues([1,2,3,4,5])