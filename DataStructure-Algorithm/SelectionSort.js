// 선택 정렬(Selection Sort)

  // 1. 주어진 배열 중에 최솟값을 찾는다.
  // 2. 그 값을 맨 앞에 위치한 값과 교체한다. (pass)
  // 3. 맨 처음 위치를 뺀 나머지 배열을 같은 방법으로 교체한다.


  function selectionSort(arr) {
    for(var i = 0; i < arr.length; i++) {
      var lowest = i;   // 최솟값으로 첫 번째 요소를 저장
      for(var j = i+1; j < arr.length; j++) {
        if(arr[j] < arr[lowest]) {   // j배열이 현재 가장 작은 값보다 작을 경우
          lowest = j;   // 최솟값을 j로 업데이트
        }
      }
      // swap 로직
      if(i !== lowest) {
        var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
      }
    }
    return arr;
  }
  
  selectionSort([34, 22, 10, 19, 17]);
  
  
  // ES2015
  function selectionSort(arr) {
    const swap = (arr, idx1, idx2) =>   // swap을 함수로 표현
      ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  
      for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for(let j = i+1; j < arr.length; j++) {
          if(arr[j] < arr[lowest]) {
            lowest = j;
          }
        }
        if(i !== lowest) swap(arr, i, lowest);
      }
      return arr;
  }
  
  selectionSort([0, 2, 34, 22, 10, 19, 17]);