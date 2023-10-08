// Binary Seach / 이진 탐색
  // 정렬된 리스트에 사용되는 탐색 알고리즘
  // 리스트에서 탐색 범위를 절반씩 좁혀가며 특정한 값을 찾을 때 사용
  // 속도가 빠르고 효율적 O(log n)


// 풀이 순서
  // 1. Target 값이 중간값보다 작으면 중간값을 기준으로 좌측 아이템들을 탐색
  // 2. Target 값이 중간값보다 크면 우측 아이템들을 탐색
  // 3. 같은 방법으로 선택된 중간의 값을 비교
  // 4. 해당 값을 찾을 때까지 이 과정을 반복


// Pseudo code
/*
fn binarySearch(A, T) is
  Low := 0
  High := n - 1
  while Low <= High do
    middle := floor((Low + High) / 2)
    if T < A[middle] then
      High := middle - 1
    else if T > A[middle] then
      Low := middle + 1
    else:
      return middle
    return -1
*/


// 코드 구현
function binarySearch(arr, target) {
  let low = 0
  let high = arr.length - 1
  while(low <= high) {
    let middle = Math.floor((low + high) / 2)
    if(target < arr[middle]) {
      high = middle - 1
    } else if(target < arr[middle]) {
      low = middle + 1
    } else {
      return middle
    }
  }
  return -1
}

console.log(binarySearch([10,20,30,40,55,70], 55))  // 4
console.log(binarySearch([10,20,50,70,90,110], 100))  // -1
