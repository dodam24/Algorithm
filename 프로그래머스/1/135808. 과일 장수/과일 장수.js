function solution(k, m, score) {
  if(score.length < m) {  // 이익이 발생하지 않는 경우
    return 0;
  }

  score.sort((a, b) => a - b);  // 오름차순 정렬

  let total = 0;

  while(score.length >= m) {
    const box = score.splice(score.length-m, m);  // score 배열에서 마지막 m개의 요소를 제거하고, 제거한 요소들을 box 배열에 저장
    const prize = m * box[0]  // 사과 한 상자의 가격
    total += prize;
  }

  return total;
}