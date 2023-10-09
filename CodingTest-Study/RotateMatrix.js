// 행렬 회전(Rotate Matrix), 이미지 회전 
  // 이미지를 표현하는 N x N 행렬이 있다. 이미지의 각 픽셀은 4바이트로 표현된다.
  // 이 때 이미지를 90도 회전시키는 메서드를 작성하라.

/*

[1,2,3]        [7,4,1]
[4,5,6]   =>   [8,5,2]
[7,8,9]        [9,6,3]

[1, 2, 3, 4]        [13, 9,5,1]
[5, 6, 7, 8]   =>   [14,10,6,2] 
[9,10,11,12]        [15,11,7,3]
[13,14,15,16]       [16,12,8,4]

*/


/* 
풀이 순서

1. Transpose (전치 행렬)
    - 왼쪽 위 -> 오른쪽 아래까지의 대각선을 중심으로, 원소들의 위치를 서로 뒤바꾼 것
    - 2중 반복문 사용
      i = 행, j = 열
      j < i 일 때, j++
      swap 하기. ex) m[j][i] <-> m[i][j]

2. Reverse (뒤집기)
*/


// 코드 구현
function rotateMatrix(m) {
  // 1. transpose
  for(let i=0; i < m.length; i++) {
    for(let j=0; j < i; j++) {
      // swap
      let temp = m[i][j];
      m[i][j] = m[j][i];
      m[j][i] = temp;
    }
  }
  // 2. reverse
  for(let row of m) {  // 각 행을 순회하며, 행 내부에 있는 원소들의 순서를 뒤집기
    // row.reverse();  // built-in 함수 사용 가능
    const size = row.length;  // or 직접 구현 (행의 크기를 저장)
    for(let i=0; i < size/2; i++) {  // size/2 하는 이유: 배열을 뒤집을 때 중간 축을 중심으로 원소의 위치를 서로 바꾸기 때문에 반만 순회
      let temp = row[i];
      row[i] = row[size-1-i];  // 배열의 양 끝에서부터 시작하여 중앙까지 점진적으로 양 쪽의 원소를 서로 교환
      row[size-1-i] = temp;
    }
  }
  return m;
}


// 테스트
console.log(rotateMatrix([[1,2,3][4,5,6][7,8,9]]),
            rotateMatrix([[1,2,3,4][5,6,7,8][9,10,11,12],[13,14,15,16]]));