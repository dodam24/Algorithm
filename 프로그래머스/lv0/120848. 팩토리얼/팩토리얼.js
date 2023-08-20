const getFactorial = (i) => {
    let result = 1;
    for(let v = 1; v <= i; v++) {
        result *= v;
    }
    return result;
}

function solution(n) {
    
    for(let i=1; ; i++) {
        const result = getFactorial(i);
        if(n < result) {
            return i - 1;
        }
    }
}