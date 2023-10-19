/*
  투 포인터 테크닉 : 
  - 1차원 배열에서 각자 다른 원소를 가리키는 2개의 포인터를 사용하여 목표값을 구한다.
  - 완전탐색 O(n2) 솔루션 -> O(n)으로 성능 향상 가능
  - 연속된 구간의 원소들을 처리할 때나, 정렬된 배열에서 무언가를 구할 때 투 포인터를 시도
*/


// 다음의 배열에서 합이 x인 연속 부분 배열의 개수를 구하라.
// arr = [1, 3, 6, 5, 2, 7, 9],   x = 9
function countSubArrSumOfX(arr, x) {
  let count = 0;
  let sum = 0;
  let left = 0;
  let right = 0;
  while(right <= arr.length) {
    if(sum === x) {
      count++
      sum -= arr[left]
      left++
    } else if (sum < x) {
      sum += arr[right]
      right++
    } else if (sum > x) {
      sum -= arr[left]
      left++
    }
  }
  return count;
}
console.log(countSubArrSumOfX([1, 3, 6, 5, 2, 7, 9], 9))  // 3



// 다음의 정렬된 배열에서 2개의 원소의 합이 x와 같은지를 확인하고, 그렇다면 각각의 원소의 인덱스를 반환하라.
// arr = [2, 4, 5, 7, 11, 15],   x = 15
function twoSumSorted(arr, x) {
  let left = 0;
  let right = arr.length - 1
  while(left < right) {
    let sum = arr[left] + arr[right]
    if(sum === x) {
      return [left, right]
    } else if(sum < x) {
      left++
    } else if(sum > x) {
      right--
    }
  }
  return [-1, -1]
}
console.log(twoSumSorted([2, 4, 5, 7, 11, 15], 15)) // [1, 4]