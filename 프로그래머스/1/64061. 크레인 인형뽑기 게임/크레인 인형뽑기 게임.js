function solution(board, moves) {
    let n = board.length;
    
    // 2차원 배열의 방향 변경
    board = board.flat();
    let rotatedBoard = Array.from({ length: n }, (i) => []);
    for (let i = 0; i < board.length; i++) {
        if (board[i]) rotatedBoard[i % n].push(board[i]);
    }
    
    // moves 배열을 순회하며 인형을 꺼내서 stack에 집어넣기
    let stack = [];
    let cnt = 0;
    for (let move of moves) {
        let doll = rotatedBoard[move - 1].shift();
        if (doll === undefined) continue;
        if (stack[stack.length - 1] === doll) {
            stack.pop();
            cnt += 2;
        } else {
            stack.push(doll);
        }
    }
    
    return cnt;
}