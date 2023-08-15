function solution(money) {
    const coffeeCnt = Math.floor(money / 5500);
    const extraMoney = money % 5500
    return [coffeeCnt, extraMoney];
}