// MxN 행렬의 한 원소가 0일 경우, 해당 원소가 속한 행과 열의 모든 원소를 0으로 설정하는 알고리즘을 작성하라.

/*
  example:
    [[1, 1, 1],   [[1, 0, 1],
     [1, 0, 1],    [0, 0, 0],
     [1, 1, 1]]    [1, 0, 1]]
 */

function zeroMatrix(m) {
  const rowSet = new Set(), colSet = new Set();  // 같은 행, 열의 중복 처리를 방지하기 위해 set 사용
  // 0이 저장되어 있는 위치 값을 저장
  for(let i=0; i < m.length; i++) {
    for(let j=0; j < m[i].length; j++) {
      if(!m[i][j]) {  // 현재 방문한 원소의 값이 0인 경우
        rowSet.add(i);  // 현재 행과 열의 좌표를 추가
        colSet.add(j);
      }
    }
  }
  // 실질적인 0으로의 변환 작업
  for(let i=0; i < m.length; i++) {
    for(let j=0; j < m[i].length; j++) {
      if(rowSet.has(i) || colSet.has(j)) {  // rowSet에 현재 행 i가 포함되거나, colSet에 현재 열 j가 포함되어 있다면
        m[i][j] = 0;  // 현재 원소를 0으로 변환
      }
    }
  }
  return m;
}


 console.log(
  // [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
  zeroMatrix([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
 ]),
 // [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]
  zeroMatrix([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);