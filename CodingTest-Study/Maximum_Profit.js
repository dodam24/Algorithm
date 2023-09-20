// 최대 수익 계산하기
/*
input = [100, 200, 50, 30, 150, 250]
두 가지 변수 초기화
1. maxProfit = 0 (기본값 0으로 시작)
2. minBuyPrice = input[0] (가장 저렴한 구입 가격)

input 배열에 반복문 실행
1. 매회의 반복마다 조건문 걸기 (현재까지 가장 저렴한 구입 가격과 현재의 가격을 비교)
2. 두 가지 결정
  1) 현재의 가격이 minBuyPrice보다 클 때
    -> 수익 발생(O), maxProfit 변수값 업데이트
  2) 현재의 가격이 minBuyPrice보다 작을 때
    -> 수익 발생(X), maxProfit 값 리턴

반복문 종료 후, maxProfit 값 리턴
*/


function maxProfit(prices) {
  let maxProfit = 0;
  let minBuyPrice = prices[0];

  for(let price of prices) {
    if(minBuyPrice < price) {
      maxProfit = Math.max(maxProfit, price - minBuyPrice)
    } else {
      minBuyPrice = price
    }
  }
  return maxProfit
}

const test1 = [10, 20, 50, 100, 80, 250]  // 240
const test2 = [150, 80, 60, 50, 30] // 0

console.log(maxProfit(test1))
console.log(maxProfit(test2))