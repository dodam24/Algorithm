function solution(n, k) {
    let yangPrice = n * 12000;
    let discountNumber = Math.floor(n / 10);
    let drinkPrice = (k - discountNumber) * 2000;
    return yangPrice + drinkPrice;
}