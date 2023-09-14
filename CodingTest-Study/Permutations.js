// 백트랙킹 패턴
  // 1. 반복: 주어진 Input, element들에 반복문 돌리기
  // 2. 선택: 탐색 target을 설정/선택을 통해 element 순서 교체
  // 3. 탐색: DFS(깊이 우선 탐색)를 활용해 탐색 실행
  // 4. 선택 취소: 선택 과정 다시 복구하기 (undo)

  // 코드 구현
  function permutate(arr) {
    const result = []

    // DFS 생성
    const dfs = (i, arr) => {
      // base condition
      if(i === arr.length) {
        return result.push([...arr])
      }

      for(let j=i; j < arr.length; j++) {
        // swap
        [arr[i], arr[j]] = [arr[j], arr[i]];
        // dfs 호출
        dfs(i+1, arr);
        // swap back
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
      }
    }
    dfs(0, arr);
    return result;
  }
  console.log(permutate(["a", "b", "c"]))

// [
//   [ 'a', 'b', 'c' ],
//   [ 'a', 'c', 'b' ],
//   [ 'b', 'a', 'c' ],
//   [ 'b', 'c', 'a' ],
//   [ 'c', 'b', 'a' ],
//   [ 'c', 'a', 'b' ]
// ]