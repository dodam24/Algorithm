// 나선형 매트릭스
// m x n 사이즈의 (m: rows, n: columns) 매트릭스의 요소를 나선형 모양으로 순회

// 예제
// input: [[1,2,3],[4,5,6],[7,8,9]]
// output:[1, 2, 3, 6, 9, 8, 7, 4, 5]

// 문제 접근 방법
/*
1. 4곳의 코너 포인터를 각각 변수에 저장 & 초기화
2. Top Left 코너에서 시작, 첫번째 줄 왼쪽 -> 오른쪽으로 순회
  순회가 끝나면 Top 포인터 +1 증가
3. Right Top 코너에서 시작, 맨 우측 위 -> 아래로 순회
  순회가 끝나면 Right 포인터 -1 감소
4. Right Bottom 코너에서 시작, 맨 우측 오른쪽 -> 왼쪽으로 순회
  순회 후, Bottom 포인터 -1 감소
5. Left 포인터에서 시작, 왼쪽 -> 오른쪽으로 순회
  Left 포인터 +1
*/

const test1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  // [1,2,3,6,9,8,7,4,5]
const test2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]  // [1,2,3,4,8,12,11,10,9,5,6,7]

function spiralMatrix(matrix) {
  const result = []

  // 코너 포인터 저장, 초기화
  let left = 0
  let right = matrix[0].length - 1 
  let top = 0
  let bottom = matrix.length - 1

  while (left <= right && top <= bottom) {  // base condition (경계를 벗어나지 않도록 기본 조건 설정)

    // 왼쪽 상단에서 오른쪽으로 이동
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
    top++;  // 다음 반복에서 상단 행을 제외하기 위해 상단 포인터를 증가

    // 오른쪽 위에서 아래로 이동
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right])
    }
    right--;  // 다음 반복에서 오른쪽 열을 제외하기 위해 오른쪽 포인터를 감소

    if (top <= bottom) {  // top 포인터가 boundary 밖으로 나가는 것을 방지
      // 오른쪽 하단에서 왼쪽으로 이동
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom--; // 다음 반복에서 하단 행을 제외하기 위해 하단 포인터를 감소
    }

    if (left <= right) {  // left 포인터가 boundary 밖으로 나가는 것을 방지
      // 왼쪽 하단에서 오른쪽으로 이동
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
      left++; // 다음 반복에서 왼쪽 열을 제외하기 위해 왼쪽 포인터를 증가
    }

  }
  return result;
}

console.log(spiralMatrix(test1))
console.log(spiralMatrix(test2))