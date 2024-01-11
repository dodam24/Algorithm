function solution(food) {
    let res = '';
    // 음식을 2로 나누고 repeat() 메서드를 이용해 순서를 정한다.
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i]/2)); 
    }
    
    // 가운데 0(물)을 넣고 reverse() 메서드를 이용해 대칭을 만든다.
    return res + '0' + [...res].reverse().join('');
}