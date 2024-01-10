/*
// 친구 정보, 선물 정보 기반으로 dstData라는 데이터를 파싱한다.
// 파싱된 dstData의 타입은 다음과 같다.
interface friendsGift {
  [key: string]: {
    [key: string]: number | number[]; // 이름이 같으면 number, 다르면 number[]
  }
}
*/

function solution(friends, gifts) {
  let answer = 0;
  let dstData = {};
  // dstData 초기화
  friends.forEach(outerName => {
    dstData[outerName] = {}
    friends.forEach(innerName => {
      if(outerName !== innerName) { // 이름이 같지 않으면 [준 개수 0, 받은 개수 0]으로 초기화
        dstData[outerName][innerName] = [
          0, // 준 개수
          0, // 받은 개수
        ]
      }
      // 이름이 같은 경우, 선물 지수를 0으로 초기화
      else {
        dstData[outerName][innerName] = 0
      }
    })
  })

  // dstData 파싱
  gifts.forEach(gift => {
    [
      from, // 선물 준 사람
      to  // 선물 받은 사람
    ] = gift.split(' ')
    dstData[from][from] += 1  // 선물 준 사람의 선물 지수 증가
    dstData[to][to] -= 1  // 선물 받은 사람의 선물 지수 감소
    // 선물 계수 계산
    dstData[from][to][0] += 1  // A가 B에게 얼마나 많은 선물을 줬는지
    dstData[to][from][1] += 1  // B가 A에게 얼마나 많은 선물을 받았는지
  })
  Object.entries(dstData).forEach(([fromName, giftDatas], index) => {
    tempAnswer = 0;
    Object.entries(giftDatas).forEach(([toName, giftData], index) => {
      // 준 사람과 받은 사람의 이름이 다른 경우
      if(fromName !== toName) {
        const [
          give, // 선물 준 사람
          receive // 선물 받은 사람
        ] = [...giftData]

        // 선물 준 사람의 개수가 더 많은 경우
        if(give > receive) {
          // 정답 증가
          tempAnswer += 1
        }
        // 선물 준 사람과 받은 사람의 개수가 같을 경우
        else if(give === receive) {
          // 선물 지수 비교
          // 준 사람의 선물 지수가 큰 경우에만 정답 증가
          if(dstData[fromName][fromName] > dstData[toName][toName]) {
            tempAnswer += 1
          }
        }
      }
    })
    // 정답 update
    answer = Math.max(answer, tempAnswer)
  })
  return answer;
}