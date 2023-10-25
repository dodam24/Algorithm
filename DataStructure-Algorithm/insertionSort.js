function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {  // 배열의 두 번째 요소부터 마지막 요소까지 반복
    var curVal = arr[i];  // 현재 요소를 culVal 변수에 저장
    for(var j = i-1; j >= 0 && arr[j] > curVal; j--) {  // 현재 요소와 그 앞에 있는 요소들을 비교하여 정렬 (비교 대상 arr[j]가 현재 요소(curVal)보다 크다면)
      arr[j+1] = arr[j]  // 비교대상 요소 j를 오른쪽으로 이동시켜 임시 공간을 생성
    }
    arr[j+1] = curVal;  // 현재 값(curVal)을 정렬된 위치(arr[j+1])에 삽입
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4])
